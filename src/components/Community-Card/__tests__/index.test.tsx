import { render, screen } from 'tests/test-utils'
import CommunityCard from '../'

// sample test, remove/replace
it('renders name', () => {
  render(<CommunityCard name="cardName" members="11111" avatar="a.png" bannerURL="a.png" />)

  const title = screen.getByText('cardName')
  const members = screen.getByText('11111')

  expect(title).toBeInTheDocument()
  expect(members).toBeInTheDocument()
})
