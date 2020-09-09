import getErrorHandling from 'tied-pants'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

interface NotifyProps {
    isUncaught: boolean,
    isFriendly: boolean,
    userMsg: string,
    productionMsg: string
}

const { createData } = getErrorHandling({
    notify: (props: NotifyProps) => {
        const { isUncaught, isFriendly, userMsg } = props

        if (isUncaught) {
            alert(`ERROR - ${userMsg}`)
        } else if (isFriendly) {
            alert(`WARNING - ${userMsg}`)
        }
    }
})
const { render } = createData('ReactDOM', ReactDOM)

render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

if (import.meta.hot) {
    import.meta.hot.accept()
}
