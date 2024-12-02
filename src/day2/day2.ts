import { readFile } from 'fs/promises'

export const processLines = (input: string): number => {
  if (!input) return null

  const lines = input.split(/\r?\n/).filter((line) => line.trim() !== '')
  const linesArray = processedLines(lines)
  return getSafeReportsAmount(linesArray)
}

export const processedLines = (lines: string[]): string[] => {
  return lines.reduce<string[]>((acc, line, index) => {
    return index % 2 === 0 ? [...acc, line] : [line, ...acc]
  }, [])
}

export const getSafeReportsAmount = (linesArray: string[]): number => {
  let safeReports = 0

  linesArray.forEach((line) => {
    const levels = line.split(' ').map(Number)
    if (isSafe(levels)) {
      safeReports += 1
    }
  })

  return safeReports
}

export const checkSafety = (levels: number[]): boolean => {
  if (levels.length < 2) return false

  const increasing = levels[1] > levels[0]

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1]

    if (diff === 0 || Math.abs(diff) > 3) return false
    if ((diff > 0 && !increasing) || (diff < 0 && increasing)) return false
  }

  return true
}

export const removeLevelAndCheck = (levels: number[]): boolean => {
  if (!dampener) return false
  for (let i = 0; i < levels.length; i++) {
    const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)]
    if (checkSafety(modifiedLevels)) return true
  }
  return false
}

export const isSafe = (levels: number[]): boolean => {
  if (levels.length < 2) return false

  if (checkSafety(levels)) return true

  return removeLevelAndCheck(levels)
}

export let dampener = false

export const setDampener = (value: boolean): void => {
  dampener = value
}

export const partOne = async (): Promise<number> => {
  const input = await readFile('src/day2/day2.txt', 'utf8')
  dampener = false
  return processLines(input)
}

export const partTwo = async (): Promise<number> => {
  const input = await readFile('src/day2/day2.txt', 'utf8')
  dampener = true
  return processLines(input)
}
