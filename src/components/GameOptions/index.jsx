import React from 'react'
import './GameOptions.css'
import Button from '../Button'

const GameOptions = ({ options, onClick }) => (
  <div className='options-container'>
    {options.map(option => (
      <Button key={option} onClick={onClick} name={option} />
    ))}
  </div>
)

export default GameOptions
