import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [userMove, setUserMove] = useState('not chosen yet')
  const handleMove = event => setUserMove(event.target.id)

  return (
    <div className='App'>
      <header className='App-header'>
        <Button onClick={handleMove} name='Rock' />
        <Button onClick={handleMove} name='Paper' />
        <Button onClick={handleMove} name='Scissors' />
        <p>You clicked {userMove}</p>
      </header>
    </div>
  )
}

export default App
