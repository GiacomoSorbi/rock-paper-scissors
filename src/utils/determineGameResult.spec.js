import determineGameResult from './determineGameResult'
import { BASE_GAME } from '../constants'

describe('determineGameResult should', () => {
  it('return the correct result for the baseGame', () => {
    expect(determineGameResult(BASE_GAME, 'Rock', 'Paper')).toBe(-1)
    expect(determineGameResult(BASE_GAME, 'Paper', 'Rock')).toBe(1)
    expect(determineGameResult(BASE_GAME, 'Rock', 'Rock')).toBe(0)
    expect(determineGameResult(BASE_GAME, 'Scissors', 'Rock')).toBe(-1)
    expect(determineGameResult(BASE_GAME, 'Rock', 'Scissors')).toBe(1)
    expect(determineGameResult(BASE_GAME, 'Scissors', 'Scissors')).toBe(0)
    expect(determineGameResult(BASE_GAME, 'Paper', 'Scissors')).toBe(-1)
    expect(determineGameResult(BASE_GAME, 'Scissors', 'Paper')).toBe(1)
    expect(determineGameResult(BASE_GAME, 'Paper', 'Paper')).toBe(0)
  })
})
