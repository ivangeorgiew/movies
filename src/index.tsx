import { React, render, StrictMode } from '@app/utils'
import { App } from '@app/App'

render(
    <StrictMode><App/></StrictMode>,
    document.getElementById('root')
)

if (import.meta.hot) {
    import.meta.hot.accept()
}
