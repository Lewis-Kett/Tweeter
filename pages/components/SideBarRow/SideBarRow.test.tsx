import { render, screen } from '@testing-library/react'
import SideBarRow from './SideBarRow'

describe('Home', () => {
  it('renders a SideBarRow', () => {
    render(<SideBarRow />)

    const heading = screen.getByRole('heading', {
      name: "Side bar row"
    })

    expect(heading).toBeInTheDocument()
  })
})