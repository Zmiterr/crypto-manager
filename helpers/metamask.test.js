import { formatAddress, formatBalance, formatChainAsNum, multiplyBigNumbers, trimAmount } from './metamask'

describe('formatBalance', () => {
  it('should format balance correctly', () => {
    const rawBalance = '1000000000000000000'
    const result = formatBalance(rawBalance)

    expect(result).toEqual('1.00')
  })

  it('should handle zero balance', () => {
    const rawBalance = '0'
    const result = formatBalance(rawBalance)

    expect(result).toEqual('0.00')
  })

  it('should handle non-numeric input', () => {
    const rawBalance = 'invalid'
    const result = formatBalance(rawBalance)

    expect(result).toEqual('NaN')
  })
})

describe('formatChainAsNum', () => {
  it('should format chain ID as a number', () => {
    const chainIdHex = '0x1a'
    const result = formatChainAsNum(chainIdHex)

    expect(result).toEqual(26)
  })

  it('should handle invalid hex input', () => {
    const chainIdHex = 'invalid'
    const result = formatChainAsNum(chainIdHex)

    expect(result).toEqual(NaN)
  })
})

describe('formatAddress', () => {
  it('should format address correctly', () => {
    const addr = '0x123456789abcdef'
    const result = formatAddress(addr)

    expect(result).toEqual('0x123456...')
  })

  it('should handle short addresses', () => {
    const addr = '0xabcdef'
    const result = formatAddress(addr)

    expect(result).toEqual('0xabcdef')
  })

  it('should handle empty address', () => {
    const addr = ''
    const result = formatAddress(addr)

    expect(result).toEqual('')
  })
})

describe('trimAmount', () => {
  it('should trim and format number correctly', () => {
    const result = trimAmount(123.456789)

    expect(result).toEqual('123.45')
  })

  it('should handle invalid input', () => {
    const result = trimAmount('invalid')

    expect(result).toEqual(0)
  })

  it('should handle small positive numbers', () => {
    const result = trimAmount(0.0001)

    expect(result).toEqual('<0.001')
  })
})

describe('multiplyBigNumbers', () => {
  it('should handle invalid input', () => {
    const result = multiplyBigNumbers('invalid', '2000000000000000000')

    expect(result.toString()).toEqual('0')
  })
})
