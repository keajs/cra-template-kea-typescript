import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { useActions, useValues } from 'kea'
import { appLogic } from './appLogic'
import { DemoForm } from "./DemoForm/DemoForm";

export function App() {
  const { speed } = useValues(appLogic)
  const { goFaster } = useActions(appLogic)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo App-logo--speed-${speed}`} alt="logo" onClick={goFaster} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://kea.js.org" target="_blank" rel="noopener noreferrer">
          Learn Kea
        </a>
      </header>
      <section className="App-forms" >
        <DemoForm />
      </section>
    </div>
  )
}
