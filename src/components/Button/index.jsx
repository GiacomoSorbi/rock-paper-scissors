import React from 'react'
import './Button.css'

const Button = ({ name, ...props }) => (
  <button {...props} id={name}>
    {name}
  </button>
)

export default Button
