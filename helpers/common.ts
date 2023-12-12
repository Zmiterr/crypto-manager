/**
 * @description
 * Matches each string with a unique number.
 */
export const hashCode = (str: string): number => {
  const result = Array(str.length)
    .fill(null)
    .reduce((code, _, index) => {
      code = (Math.imul(31, code) + str.charCodeAt(index)) | 0

      return code
    }, 0)

  return Math.abs(result)
}

/**
 * Copies the specified text value to the clipboard using the Clipboard API.
 *
 * @param {string} value - The text value to copy to the clipboard.
 *
 * @throws {Error} If copying to the clipboard fails, an error message is logged to the console.
 */
export const copyValue = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value)
  } catch (e) {
    console.error('Copy error: ' + e)
  }
}

/**
 * Checks if a given string consists only of numbers, optionally including a dot.
 *
 * @param {string} value - The string to check.
 * @param {boolean} [withDot=false] - Set to true to allow a dot (decimal point) in the string.
 *
 * @returns {boolean} Returns true if the string consists only of numbers (and an optional dot), otherwise returns false.
 */
export const isConsistsOnlyNumbers = (value: string, withDot = false): boolean => {
  const trimmedValue = value?.trim() ?? ''

  if (!trimmedValue) return true

  const onlyNumRegExp = withDot ? /^[0-9]+\.?[0-9]*$/ : /^[0-9]+$/

  return onlyNumRegExp.test(trimmedValue)
}

/**
 * Trims a string and inserts dots within it to make it fit a specified format.
 *
 * @param {Object} options - An object containing options.
 * @param {string} options.value - The string to be trimmed and formatted.
 * @param {number} [options.charsBeforeDots=7] - The maximum number of characters to appear before the dots.
 * @param {number} [options.charsAfterDots=15] - The maximum number of characters to appear after the dots.
 * @param {number} [options.maxLength] - The maximum length of the resulting string.
 * @param {number} [options.dotsCount=3] - The number of dots to insert in place of trimmed characters.
 *
 * @returns {string} Returns the trimmed and formatted string.
 */
export const trimStringAndInsertDots = ({
  value,
  charsBeforeDots = 7,
  charsAfterDots = 15,
  maxLength,
  dotsCount = 3,
}: {
  value: string
  charsBeforeDots?: number
  charsAfterDots?: number
  maxLength?: number
  dotsCount?: number
}): string => {
  const trimmedValue = value?.trim() ?? ''

  if (!trimmedValue) return ''
  const trimmedValueLength = trimmedValue?.length ?? 0

  if (maxLength !== undefined && trimmedValue?.length <= maxLength) return trimmedValue

  return `${trimmedValue.substring(0, charsBeforeDots)}${'.'.repeat(dotsCount)}${trimmedValue.substring(
    trimmedValueLength - charsAfterDots,
    trimmedValueLength
  )}`
}

export const shouldForwardProp = (propName: string) => !propName.startsWith('$')
