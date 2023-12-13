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
  return `${addr.substring(0, 8)}...`
}
