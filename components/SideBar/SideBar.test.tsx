import { render, screen } from '@testing-library/react'
import SideBar from './SideBar'

describe('SideBar', () => {
  it('renders a SideBar', () => {
    render(<SideBar />)

    const heading = screen.getByRole('heading', {
      name: "Side bar"
    })

    expect(heading).toBeInTheDocument()
  })
})