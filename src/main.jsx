import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Spin } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './utils/i18n'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className=" w-full h-screen flex justify-center items-center  "><Spin size="large" tip="Загрузка..."></Spin></div>}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)