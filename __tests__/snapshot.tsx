import { Layout } from '@/components'
import Cv from '@/pages/cv'
import Gameoflife from '@/pages/gameoflife'
import Imprint from '@/pages/imprint'
import Home from '@/pages/index'
import Uses from '@/pages/uses'
import { render, waitFor } from '@testing-library/react'

// import PDFViewer from '@/components/PDFViewer'

it('renders the layout unchanged', () => {
  const { container } = render(<Layout />)
  expect(container).toMatchSnapshot()
})
it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})

it('renders game of life unchanged', () => {
  const { container } = render(<Gameoflife />)
  expect(container).toMatchSnapshot()
})

it('renders uses unchanged', () => {
  const { container } = render(<Uses />)
  expect(container).toMatchSnapshot()
})

// waiting for: https://github.com/jaredLunde/react-hook/pull/301
// it('renders PDFViewer unchanged', () => {
//   const { container } = render(
//     <PDFViewer file={'~/documents/cv_sebastian_remm.pdf'} />
//   )
//   expect(container).toMatchSnapshot()
// })

it('renders cv unchanged', async () => {
  await waitFor(() => {
    const { container } = render(<Cv />)
    expect(container).toMatchSnapshot()
  })
})

it('renders imprint unchanged', () => {
  const { container } = render(<Imprint />)
  expect(container).toMatchSnapshot()
})
