<<<<<<< HEAD
import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'kea'
import App from './App'
=======
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App/App'
>>>>>>> kea-3.0
import { initKea } from './initKea'

initKea()

<<<<<<< HEAD
const rootDiv = document.getElementById('root')
if (rootDiv) {
  const root = createRoot(rootDiv)
  root.render(
    <Provider>
      <App />
    </Provider>
  )
=======
const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
} else {
  console.error(`Could not find element matching "#root"`)
>>>>>>> kea-3.0
}
