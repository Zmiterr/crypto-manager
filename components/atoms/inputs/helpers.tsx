import { FormattedMessage, IntlFormatters } from 'react-intl'

import { InputPlaceholder, InputText } from './types'

/**
 * Renders input text based on the provided configuration.
 *
 * The `renderInputText` function takes an `InputText` object as its argument and returns a corresponding JSX element. The `InputText` object specifies the type of content to render, such as plain text, a JSX component, or an internationalized (intl) message.
 *
 * @param {InputText} [props] - An `InputText` object that defines the content to render.
 *
 * @returns {JSX.Element | null} The rendered content as a JSX element, or `null` if no `InputText` object is provided.
 */
export const renderInputText = (props?: InputText) => {
  if (!props) return null

  switch (props.type) {
    case 'jsx': {
      return props.component
    }

    case 'text': {
      return props.text
    }

    case 'intl': {
      return <FormattedMessage {...props} />
    }
  }
}

/**
 * Returns a function that generates input placeholders based on the provided `formatMessage` function.
 *
 * The `getInputPlaceholder` function takes an `formatMessage` function and returns a placeholder generator function. The placeholder generator function takes an `InputPlaceholder` object and generates a corresponding placeholder string based on the specified content type, such as plain text or an internationalized (intl) message.
 *
 * @param {IntlFormatters['formatMessage']} formatMessage - A function to format internationalized messages.
 *
 * @returns {(props?: InputPlaceholder) => string} A placeholder generator function that takes an `InputPlaceholder` object and returns the generated placeholder string.
 */
export const getInputPlaceholder = (formatMessage: IntlFormatters['formatMessage']) => {
  return (props?: InputPlaceholder): string => {
    if (!props) return ''

    switch (props.type) {
      case 'text': {
        return props.text
      }

      case 'intl': {
        return formatMessage(props)
      }
    }
  }
}
