import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/App.jsx'
import Globalstyles from './styles/styles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyles/>
    <App />
  </React.StrictMode>,
)
