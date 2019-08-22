import React, { useState } from 'react'
import './App.css'
import MessageBox from './components/MessageBox'
import GameOptions from './components/GameOptions'
import { randomPicker, determineGameResult } from './utils'
import { BASE_GAME } from './constants'

function App() {
  const [userMove, setUserMove] = useState('not chosen yet')
  const [computerMove, setComputerMove] = useState()
  const [gameResult, setGameResult] = useState(null)
  const handleMove = event => {
    setUserMove(event.target.id)
    setComputerMove(randomPicker(BASE_GAME))
    setGameResult(determineGameResult(BASE_GAME, userMove, computerMove))
  }

  return (
    <div className='app'>
      <header className='app-header' />
      <GameOptions options={BASE_GAME} onClick={handleMove} />
      {gameResult !== null && (
        <MessageBox
          result={gameResult}
          message={`You clicked ${userMove} - CPU picked ${computerMove}`}
        />
      )}
    </div>
  )
}

export default App
