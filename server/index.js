import http from 'http'
import express from 'express'
import cors from 'cors'
import path from 'path'
import getErrorHandling from 'tied-pants'

const { createData, getHandledServer, FriendlyError } = getErrorHandling()
const app = createData('Express application', express(), ({ error, args }) => {
    const res = args[1]

    if (!res.headersSent) {
        res.status(500).json({
            error: {
                name: 'Internal server error',
                message: error.message,
                stack: error.stack
            }
        })
    }
})
const server = getHandledServer(http.createServer(app))
const port = process.env.PORT || 3000
const publicPath = path.join(process.cwd(), '..', 'public')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(publicPath))

app.get('/api', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    throw new FriendlyError('Intended async error')
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

server.listen(port)
console.log(`Server running on port ${port}`)
