// custom renderer for rendering with react-testing-libraby, that way we can render with our own providers
import { render, queries, RenderOptions } from '@testing-library/react'

// don't need this fgor now since we don't have custom queries
// import * as customQueries from './custom-queries'
const customRender = (
  element: JSX.Element,
  options?: Omit<RenderOptions, 'queries'>
): ReturnType<typeof render> =>
  render(element, {
    queries: {
      ...queries,
      // ...customQueries
    },
    ...options,
  })

/* eslint-disable import/export */
export * from '@testing-library/react'
export { customRender as render }
