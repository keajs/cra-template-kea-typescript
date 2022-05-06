import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'kea'
import App from './App'
import { initKea } from './initKea'

initKea()

const rootDiv = document.getElementById('root')
if (rootDiv) {
  const root = createRoot(rootDiv)
  root.render(
    <Provider>
      <App />
    </Provider>
  )
}
