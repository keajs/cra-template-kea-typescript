import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { initKea } from './initKea'
import { Provider } from 'kea'

describe('App', () => {
  beforeEach(() => {
    initKea()
  })

  test('renders learn react link', () => {
    render(
      <Provider>
        <App />
      </Provider>
    )
    const linkElement = screen.getByText(/learn kea/i)
    expect(linkElement).toBeInTheDocument()
  })
})
