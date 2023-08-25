import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './utils/i18n'
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)