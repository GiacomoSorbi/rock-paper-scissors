import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
// import 'jest-dom/extend-expect'
import GameOptions from './index'

describe('GameOptions should', () => {
  it('render', () => {
    const options = ['pippi', 'cat', 'pappa']
    const { asFragment } = render(<GameOptions options={options} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('render buttons passed in the props', () => {
    const options = ['pippi', 'cat', 'pappa']
    const fn = jest.fn()
    const { getByText } = render(<GameOptions options={options} />)
    for (let i = 0; i < options.length; i++) {
      const clickedElement = options[i]

      expect(getByText(clickedElement))
    }
  })

  it('render buttons that trigger the passed `onClick` prop', () => {
    const options = ['pippi', 'cat', 'pappa']
    const fn = jest.fn()
    const { getByText } = render(<GameOptions options={options} onClick={fn} />)

    const clickedElement = options[0]
    fireEvent.click(getByText(clickedElement))

    expect(fn).toHaveBeenCalledTimes(1)
  })
})
