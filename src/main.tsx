import ReactDOM from 'react-dom/client'
import App from './pages/app/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <ShoppingCartProvider >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ShoppingCartProvider>
)
