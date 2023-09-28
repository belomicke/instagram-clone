import App from './app'
import { createRoot } from 'react-dom/client'

const element = document.querySelector('#app')
const root = createRoot(element)

root.render(
    <App />
)
