import { parseFile, calculatedDistance, calculateSimilarityScore } from './day1'

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

  test('calculatedDistance computes the correct distance', () => {
    const left = [3, 4, 2, 1, 3, 3]
    const right = [4, 3, 5, 3, 9, 3]
    const distance = calculatedDistance(left, right)
    expect(distance).toBe(11)
  })

  test('calculateSimilarityScore computes the correct similarity score', () => {
    const left = [3, 4, 2, 1, 3, 3]
    const right = [4, 3, 5, 3, 9, 3]
    const similarityScore = calculateSimilarityScore(left, right)
    expect(similarityScore).toBe(31)
  })
})
