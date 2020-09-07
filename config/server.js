const getErrorHandling = require('tied-pants')
const { createData, getHandledServer, FriendlyError } = getErrorHandling()

const [http, path, express, cors] = createData('imports', [
    require('http'),
    require('path'),
    require('express'),
    require('cors'),
])
const app = createData(
    'Express application',
    express(),
    ({ error, args: [req, res] }) => {
        if (!res.headersSent) {
            res.status(500).json({ error: {
                name: 'Internal server error',
                message: error.message,
                stack: error.stack
            } })
        }
    }
)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'static')))

app.get('/err', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    throw new FriendlyError('Intended async error')
})

const port = process.env.PORT || 3000
const server = getHandledServer(http.createServer(app))

server.listen(port)
console.log(`Server running on port ${port}`)
