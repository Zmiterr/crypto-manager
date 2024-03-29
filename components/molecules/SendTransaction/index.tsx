import { Stack } from '@mui/material'
import { parseUnits } from 'ethers'
import { FC, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import { getMetamastError } from '@/helpers/metamaskErrors'
import { useMetaMask } from '@/hooks/useMetamask'

import { Button, Input, NumberInput } from '@/components/atoms'

import Block from '../Block'

const SendTransaction: FC = () => {
  const { provider, wallet } = useMetaMask()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [to, setTo] = useState<string>('0x70F657164e5b75689b64B7fd1fA275F334f28e18')
  const [amount, setAmount] = useState<string>('0.0001')

  if (!provider) return

  const send = async () => {
    try {
      setIsLoading(true)
      const signer = await provider.getSigner()

      const tx = await signer.sendTransaction({
        value: parseUnits(amount, 18),
        to: to,
      })

      const txReciept = await tx.wait()

      toast.success(`Success! Tx hash: ${txReciept?.hash}`)
    } catch (e) {
      const { message, code } = getMetamastError(e)

      toast.error(`${code}: ${message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const personalSignClick = async () => {
    try {
      const exampleMessage = 'Example `personal_sign` message.'
      const msg = `0x${Buffer.from(exampleMessage, 'utf8').toString('hex')}`
      const sign = await window.ethereum.request({
        method: 'personal_sign',
        params: [msg, wallet.accounts[0]],
      })

      toast.success(`Success! Tx hash: ${sign}`)
    } catch (err) {
      const { message, code } = getMetamastError(err)

      toast.error(`${code}: ${message}`)
    }
  }

  return (
    <>
      <Block gap={'2rem'} title={'Send'}>
        <Stack gap={'1.5rem'}>
          <Input onChange={(e) => setTo(e.target.value)} value={to} />
          <NumberInput onChange={(e) => setAmount(e.target.value)} value={amount} />
          <Button onClick={send} isLoading={isLoading} id={'sendButton'}>
            Send
          </Button>
          <Button onClick={personalSignClick} isLoading={isLoading} id={'personalSign'}>
            Personal sign
          </Button>
        </Stack>
      </Block>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default SendTransaction
