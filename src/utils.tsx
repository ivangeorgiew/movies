import getErrorHandling from 'tied-pants'
import _React from 'react'
import _ReactDOM from 'react-dom'

interface NotifyProps {
    isUncaught: boolean,
    isFriendly: boolean,
    userMsg: string,
    productionMsg: string
}

export const {
    isDevelopment,
    devErrorLogger,
    notify,
    isObject,
    isBrowser,
    isNodeJS,
    FriendlyError,
    stringifyAll,
    createData,
    getHandledServer
} = getErrorHandling({
    isDevelopment: import.meta.env.NODE_ENV !== 'production',
    notify: (props: NotifyProps) => {
        const { isUncaught, isFriendly, userMsg } = props

        if (isUncaught) {
            alert(`ERROR - ${userMsg}`)
        } else if (isFriendly) {
            alert(`WARNING - ${userMsg}`)
        }
    }
})

export const React = createData('React', _React)
export const { useEffect, StrictMode } = React
export const ReactDOM = createData('ReactDOM', _ReactDOM)
export const { render } = ReactDOM
