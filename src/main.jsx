import { createRoot } from 'react-dom/client'
import './index.sass'
import App from './App.jsx'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./i18n.js"
import { I18nextProvider } from 'react-i18next'

createRoot(document.getElementById('root')).render(
    <I18nextProvider>
        <App />
    </I18nextProvider>
)
