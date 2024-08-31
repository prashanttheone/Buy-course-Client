import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PriceProvider } from './components/context/context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
// import { MyContext } from './components/context/context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <PriceProvider>
    <App />
    </PriceProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
