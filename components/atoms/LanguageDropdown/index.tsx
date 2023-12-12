import { InputProps, SelectChangeEvent, Typography } from '@mui/material'
import clsx from 'clsx'
import React, { FC, memo } from 'react'

import { LanguageIcon } from '@/public/icons'

import { OptionType, Select } from '../inputs'
import { LanguageSelectorWrapper, SelectInput as StyledSelectInput } from './styles'

export type Props = {
  languages: OptionType<string>[]
  locale: string
  onLanguageChange: (e: SelectChangeEvent<unknown>) => Promise<void>
  className?: string
}

const LanguageDropdown: FC<Props> = memo(({ languages, locale, onLanguageChange, className }) => {
  const isSingleLanguage = languages.length <= 1

  return (
    <LanguageSelectorWrapper className={clsx(className, { disabledSelector: isSingleLanguage })}>
      <Select options={languages} value={locale} input={<SelectInput />} onChange={onLanguageChange} isChevronHidden />
    </LanguageSelectorWrapper>
  )
})

const SelectInput = (props: InputProps) => {
  return (
    <StyledSelectInput
      {...props}
      type={'hidden'}
      startAdornment={
        <div className={clsx('localeButton', props.inputProps?.open && 'open')}>
          <LanguageIcon />
          <Typography fontSize="1.125rem" color="background.light" textTransform="capitalize">
            <>{props.value}</>
          </Typography>
        </div>
      }
      endAdornment={null}
    />
  )
}

export default LanguageDropdown
