import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'

const body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = '#16161a'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Router>
      <App />
   </Router>
)