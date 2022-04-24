import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App/App'
import { Provider } from 'kea'
import { initKea } from './initKea'

initKea()

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
