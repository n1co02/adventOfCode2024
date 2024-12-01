import { readFile } from 'fs/promises'

type List = Array<number>

export const parseFile = (input: string) => {
  const left: List = []
  const right: List = []
  input.split('\n').forEach((line) => {
    const [leftValue, rightValue] = line.split(/\s+/).map(Number)
    left.push(leftValue)
    right.push(rightValue)
  })
  return { left, right }
}

export const sortLists = (left: List, right: List): number => {
  const sortedLeft = [...left].sort((a, b) => a - b)
  const sortedRight = [...right].sort((a, b) => a - b)
  return calculatedDistance(sortedLeft, sortedRight)
}

export const calculatedDistance = (
  sortedLeft: List,
  sortedRight: List,
): number => {
  let totalDistance = 0
  for (let i = 0; i < sortedLeft.length; i++) {
    totalDistance += Math.abs(sortedLeft[i] - sortedRight[i])
  }

  return totalDistance
}

export const calculateSimilarityScore = (left: List, right: List): number => {
  const frequencyMap = mapFrequency(right)
  return calculateScoreWithMap(left, frequencyMap)
}

export const mapFrequency = (right: List): Map<number, number> => {
  const frequencyMap = new Map<number, number>()
  for (const num of right) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  }
  return frequencyMap
}

export const calculateScoreWithMap = (
  left: List,
  frequencyMap: Map<number, number>,
): number => {
  let similarityScore = 0
  for (const num of left) {
    similarityScore += num * (frequencyMap.get(num) || 0)
  }

  return similarityScore
}

export const partOne = async (): Promise<number> => {
  const input = await readFile('src/day1/day1.txt', 'utf8')
  const { left, right } = parseFile(input)
  return calculatedDistance(left, right)
}

export const partTwo = async (): Promise<number> => {
  const input = await readFile('src/day1/day1.txt', 'utf8')
  const { left, right } = parseFile(input)
  return calculateSimilarityScore(left, right)
}
