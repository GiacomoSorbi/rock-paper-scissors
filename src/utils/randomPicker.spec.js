import randomPicker from './randomPicker'

describe('randomPicker should', () => {
  it('take one element from the given list of options', () => {
    const options = ['pippi', 'cat', 'pappa', 'nanna']
    expect(options).toContain(randomPicker(options))
  })
  it('return different elements for a good number of calls', () => {
    const options = ['pippi', 'cat', 'pappa', 'nanna']
    const results = {}
    const numberOfTests = 1000
    const confidenceThreshold = (numberOfTests * 0.8) / options.length
    for (let i = 0; i < numberOfTests; i++) {
      const result = randomPicker(options)
      results[result] = (results[result] || 0) + 1
    }
    for (const option of options) {
      expect(results[option]).toBeGreaterThanOrEqual(confidenceThreshold)
    }
  })
})
