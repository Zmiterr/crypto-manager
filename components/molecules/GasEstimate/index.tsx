import { Stack } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'

import { formatChainAsNum } from '@/helpers'
import { useMetaMask } from '@/hooks/useMetamask'

import { Loader } from '@/components/atoms'

import { Block } from '..'

interface GasFeeEstimate {
  suggestedMaxPriorityFeePerGas: string
  suggestedMaxFeePerGas: string
  minWaitTimeEstimate: number
  maxWaitTimeEstimate: number
}

interface Data {
  low: GasFeeEstimate
  medium: GasFeeEstimate
  high: GasFeeEstimate
  estimatedBaseFee: string
  networkCongestion: number
  latestPriorityFeeRange: string[]
  historicalPriorityFeeRange: string[]
  historicalBaseFeeRange: string[]
  priorityFeeTrend: 'up' | 'down'
  baseFeeTrend: 'up' | 'down'
}
const MOCK_FEES = {
  low: {
    suggestedMaxPriorityFeePerGas: '0.05',
    suggestedMaxFeePerGas: '28.501086221',
    minWaitTimeEstimate: 15000,
    maxWaitTimeEstimate: 30000,
  },
  medium: {
    suggestedMaxPriorityFeePerGas: '0.1',
    suggestedMaxFeePerGas: '38.508966399',
    minWaitTimeEstimate: 15000,
    maxWaitTimeEstimate: 45000,
  },
  high: {
    suggestedMaxPriorityFeePerGas: '0.3',
    suggestedMaxFeePerGas: '48.666846576',
    minWaitTimeEstimate: 15000,
    maxWaitTimeEstimate: 60000,
  },
  estimatedBaseFee: '28.451086221',
  networkCongestion: 0.7718,
  latestPriorityFeeRange: ['0.05', '9.249760902'],
  historicalPriorityFeeRange: ['0.023435712', '56.009283908'],
  historicalBaseFeeRange: ['19.277073248', '31.361941035'],
  priorityFeeTrend: 'down',
  baseFeeTrend: 'up',
}
const INFURA_API_KEY = '1cbbd9baa7dd4b67a280b208e88e8fa3'
const INFURA_API_KEY_SECRET = '/uDsxSXtoQsf+kIkEugoNeLOqUIJlQTl/F4b+1vtods+kmZyzel6NQ'

const GasEstimate: FC = () => {
  const [data, setData] = useState<Data | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  // const chainId = 1
  const { wallet } = useMetaMask()
  const chainId = formatChainAsNum(wallet.chainId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const Auth = Buffer.from(`${INFURA_API_KEY}:${INFURA_API_KEY_SECRET}`).toString('base64')

        const response = await fetch(`https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`, {
          headers: {
            Authorization: `Basic ${Auth}`,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result: Data = await response.json()

        setData(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    // Call the fetchData function
    fetchData()
  }, [])

  if (loading) return <Loader />

  // if (!data ) return
  // const { low, medium, high } = data
  const { low, medium, high } = data || MOCK_FEES
  const set_names = ['low', 'medium', 'high']

  const dataSets = [low, medium, high]

  return (
    <Stack direction={'row'} gap={'2rem'}>
      {dataSets.map((data, index) => (
        <Block title={set_names[index]} key={index}>
          {renderStack(data)}
        </Block>
      ))}
    </Stack>
  )
}

const renderStack = (data: GasFeeEstimate) => (
  <Stack gap={'1.5rem'}>
    <p>Max Priority Fee: {data.suggestedMaxPriorityFeePerGas}</p>
    <p>Max Fee Per Gas: {data.suggestedMaxFeePerGas}</p>
    <p>Min Wait Time: {data.minWaitTimeEstimate} seconds</p>
    <p>Max Wait Time: {data.maxWaitTimeEstimate} seconds</p>
  </Stack>
)

export default GasEstimate
