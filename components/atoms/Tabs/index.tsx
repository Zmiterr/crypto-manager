import { TabProps, TabsProps } from '@mui/material'
import { useIntl } from 'react-intl'

import { useIntlHelpers } from '@/lib/i18n'

import { StyledTab, StyledTabs } from './styles'

export type TabSize = 'large' | 'small'

type CustomTabProps<T> = Omit<TabProps, 'value'> & { value: T }

export type Props<T> = Omit<TabsProps, 'value'> & {
  tabs: CustomTabProps<T>[]
  setTab: (t: T) => void
  size?: TabSize
  value: T
}

/**
 * A customizable tab navigation component for switching between content sections.
 *
 * The `Tabs` component allows you to create a tabbed navigation system for switching between different content sections. It provides options for specifying the tabs' appearance and labels.
 *
 * @component
 *
 * @param {Props} props - The props for configuring the `Tabs` component.
 * @param {TabProps[]} props.tabs - An array of tab configurations, each containing props for an individual tab.
 * @param {function} props.setTab - A callback function to handle tab selection.
 * @param {TabSize} [props.size='small'] - The size of the tabs. Options are 'small' or 'large'.
 * @param {string} props.value - The value of the currently selected tab.
 *
 * @returns {FC} The `Tabs` component for creating a tabbed navigation system.
 *
 * @template T - The type of the tab values.
 */
const Tabs = <T,>(props: Props<T>) => {
  const { tabs, setTab, size = 'small', orientation } = props
  const { formatMessage } = useIntl()
  const { isFormattedMessageId } = useIntlHelpers()

  return (
    <StyledTabs {...props} onChange={(_, tab) => setTab(tab)} $size={size} orientation={orientation}>
      {tabs.map((tab) => {
        const label = isFormattedMessageId(tab.label) ? formatMessage({ id: String(tab.label) }) : tab.label

        return <StyledTab disableRipple {...tab} key={String(tab.value)} label={label} $orientation={orientation} />
      })}
    </StyledTabs>
  )
}

export default Tabs
