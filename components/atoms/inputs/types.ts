import { ReactNode } from 'react'

export type CommonInputProps = Partial<{
  id: string
  className: string
  name: string
  isDisabled: boolean
  isRequired: boolean
  isError: boolean
}>

export type InputText =
  | {
      type: 'intl'
      /** @type {FormattedMessageId}  */
      id: string
      //TODO: check type
      // eslint-disable-next-line
      values?: any
    }
  | {
      type: 'text'
      text: string
    }
  | {
      type: 'jsx'
      component: ReactNode
    }

export type InputPlaceholder = Exclude<InputText, { type: 'jsx' }>

export type LabelPlacement = 'start' | 'end' | 'top' | 'bottom'
