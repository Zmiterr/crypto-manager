import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import * as Yup from 'yup'

export type ValidationData = {
  min?: number
  max?: number
}
const EMAIL_RX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const useValidationRules = (data: ValidationData = {}) => {
  const { formatMessage } = useIntl()
  const stringifiedData = JSON.stringify(data)

  const min = data?.min || 0
  const max = data?.max || 0

  return useMemo(
    () => ({
      email: Yup.string().matches(EMAIL_RX),
      required: Yup.string().required(formatMessage({ id: 'LIB.ERRORS.REQUIRED_FIELD' })),
      min: Yup.number().min(min),
      max: Yup.number().min(max),
    }),
    [stringifiedData, formatMessage, max, max]
  )
}

export default useValidationRules
