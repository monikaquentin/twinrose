import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import App, { Endpoint } from '@/App'

describe('App', () => {
  it('Renders sign in path', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/sign-in']}>
        <Endpoint />
      </MemoryRouter>
    )
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Twin Rose'
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Sign in to your account'
    )
  })
  it('Renders not found if invalid path', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <Endpoint />
      </MemoryRouter>
    )
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Page not found'
    )
  })
})
