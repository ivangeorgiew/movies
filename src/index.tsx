import { React, render, StrictMode } from '@src/utils'
import { App } from '@src/App'

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
)

if (import.meta.hot) {
    import.meta.hot.accept()
}
