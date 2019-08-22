const determineGameResult = (options, userMove, computerMove) => {
  return (r => (r === 2 ? -1 : r === -2 ? 1 : r))(
    (options.indexOf(userMove) - options.indexOf(computerMove)) % 3,
  )
}

export default determineGameResult
