import Home from '@/pages/index'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/react/dont-cleanup-after-each'

describe('Home', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Hey there! Welcome to my personal portfolio and digital playground./i
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the profile picture', () => {
    const profilePicture = screen.getByRole('img', {
      name: /profile picture/i
    })

    expect(profilePicture).toBeInTheDocument()
  })

  it('renders the references heading', () => {
    const heading = screen.getByRole('heading', {
      name: /References:/i
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders two project pictures', () => {
    const pictures = screen.getAllByRole('img', {
      name: /project picture/i
    })

    expect(pictures).toHaveLength(2)
  })
})
