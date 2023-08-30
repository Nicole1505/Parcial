import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Punto1} from './Punto1.jsx'
import {Punto2} from './Punto2.jsx'
import {Punto3} from './Punto3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Punto1 />
    <Punto2 />
    <Punto3 />
  </React.StrictMode>
)
