import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App/App'
import { Provider } from 'kea'
import { initKea } from './initKea'

initKea()

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <Provider>
      <App />
    </Provider>
  )
} else {
  console.error('Could not find element matching "#root"')
}
