import {
  parseFile,
  calculatedDistance,
  calculateSimilarityScore,
  calculateScoreWithMap,
  mapFrequency,
  sortLists,
} from './day1'

describe('Day 1 Tests', () => {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`

  test('parseFile correctly separates left and right lists', () => {
    const { left, right } = parseFile(input)
    expect(left).toEqual([3, 4, 2, 1, 3, 3])
    expect(right).toEqual([4, 3, 5, 3, 9, 3])
  })

  test('sortLists calculates the correct total distance', () => {
    const { left, right } = parseFile(input)
    const distance = sortLists(left, right)
    expect(distance).toBe(11) // Manually calculated
  })

  test('calculatedDistance computes the correct distance', () => {
    const sortedLeft = [1, 2, 3, 3, 3, 4]
    const sortedRight = [3, 3, 3, 4, 5, 9]
    const distance = calculatedDistance(sortedLeft, sortedRight)
    expect(distance).toBe(11)
  })

  test('mapFrequency generates the correct frequency map', () => {
    const { right } = parseFile(input)
    const frequencyMap = mapFrequency(right)
    expect(frequencyMap.get(3)).toBe(3)
    expect(frequencyMap.get(4)).toBe(1)
    expect(frequencyMap.get(5)).toBe(1)
    expect(frequencyMap.get(9)).toBe(1)
  })

  test('calculateScoreWithMap calculates the correct similarity score', () => {
    const { left, right } = parseFile(input)
    const frequencyMap = mapFrequency(right)
    const score = calculateScoreWithMap(left, frequencyMap)
    expect(score).toBe(31) // Manually calculated
  })

  test('calculateSimilarityScore calculates the correct similarity score', () => {
    const { left, right } = parseFile(input)
    const score = calculateSimilarityScore(left, right)
    expect(score).toBe(31)
  })

  test('Integration Test - Part One', async () => {
    const { left, right } = parseFile(input)
    const result = calculatedDistance(left, right)
    expect(result).toBe(11)
  })

  test('Integration Test - Part Two', async () => {
    const { left, right } = parseFile(input)
    const result = calculateSimilarityScore(left, right)
    expect(result).toBe(31)
  })
})
