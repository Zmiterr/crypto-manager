import { BigNumber } from '@ethersproject/bignumber'
/**
 * Formats raw balance to a human-readable format.
 * @param {string} rawBalance - The raw balance as a string.
 * @returns {string} The formatted balance.
 */
export const formatBalance = (rawBalance: string): string => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)

  return balance
}

/**
 * Formats chain ID from hexadecimal to a numeric format.
 * @param {string} chainIdHex - The chain ID in hexadecimal format.
 * @returns {number} The formatted chain ID as a number.
 */
export const formatChainAsNum = (chainIdHex: string): number => {
  const chainIdNum = parseInt(chainIdHex)

  return chainIdNum
}

/**
 * Formats address by truncating it and appending ellipsis.
 * @param {string} addr - The address to be formatted.
 * @returns {string} The formatted address.
 */
export const formatAddress = (addr: string): string => {
  const SHORT_ADDRESS_LENGTH = 8
  const postfix = addr.length >= SHORT_ADDRESS_LENGTH + 1 ? '...' : ''

  return addr.substring(0, SHORT_ADDRESS_LENGTH) + postfix
}
const frac = (num: number) => num.toString().split('.')[1] || ''

export const convertToEnLocaleString = (value: number | string): string => Number(value).toLocaleString('en-US')
/**
 * Trims and formats a number to a specified precision.
 * @param {number|string} num - The number to trim and format.
 * @returns {number|string} The trimmed and formatted number.
 */
export const trimAmount = (num: string | number) => {
  const formattedNum = Number(num)

  if (isNaN(formattedNum)) return 0

  if (formattedNum < 0.001 && formattedNum > 0) return '<0.001'

  let result = formattedNum

  const decimalPart = Math.trunc(formattedNum)
  const fracPart = frac(formattedNum)

  if (formattedNum < 0.01) {
    result = Number(Number(`0.${fracPart}`).toPrecision(1))
  } else if (fracPart.length > 2) {
    const shortedFracPart = fracPart.slice(0, 2)

    result = Number(`${String(decimalPart)}.${shortedFracPart}`)
  }

  return convertToEnLocaleString(Number(result))
}

/**
 * Multiplies two big numbers and returns the result.
 * @param {BigNumber|string} numA - The first big number.
 * @param {BigNumber|string} numB - The second big number.
 * @param {number} decimals - The number of decimals to consider in the result.
 * @returns {BigNumber} The result of the multiplication.
 */
export const multiplyBigNumbers = (numA: BigNumber | string, numB: BigNumber | string, decimals = 18) => {
  try {
    const firstValue = typeof numA === 'string' ? BigNumber.from(numA) : numA
    const secondValue = typeof numB === 'string' ? BigNumber.from(numB) : numB

    return firstValue?.mul(secondValue)?.div(decimals)
  } catch (err) {
    return BigNumber.from(0)
  }
}
