import { processLines, setDampener, isSafe } from './day2'

describe('processLines', () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
      `

  it('should return the correct number of safe reports without dampener', () => {
    setDampener(false)
    const result = processLines(input)
    expect(result).toBe(2)
  })

  it('should return the correct number of safe reports with dampener', () => {
    setDampener(true)
    const result = processLines(input)
    expect(result).toBe(4)
  })
})

describe('isSafe', () => {
  it('should return true for a safe array', () => {
    const levels = [1, 2, 3, 4]
    expect(isSafe(levels)).toBe(true)
  })

  it('should return false for an unsafe array', () => {
    const levels = [1, 2, 7, 10]
    expect(isSafe(levels)).toBe(false)
  })
})
