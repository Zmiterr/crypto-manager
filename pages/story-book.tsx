import { Box, Stack, Typography, useTheme } from '@mui/material'
import { useState } from 'react'

import devOnly from '@/hocs/devOnly'
import { BurgerIcon, CopyIcon, CrownIcon } from '@/public/icons'

import {
  Button,
  Checkbox,
  CheckboxGroup,
  CopyInput,
  Divider,
  Input,
  InputText,
  Link,
  NumberInput,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Tabs,
} from '@/components/atoms'
import { Layout } from '@/components/templates'

// only test page
const StoryBook = () => {
  const theme = useTheme()
  const [numberInput, setNumberInput] = useState('')
  const [copyInput, setCopyInput] = useState('')
  const [tab, setTab] = useState('tab1')
  const [page, setPage] = useState(1)

  const groupValues: { label: InputText; name: string }[] = [
    { label: { type: 'text', text: 'Option 1' }, name: 'v1' },
    { label: { type: 'text', text: 'Option 2' }, name: 'v2' },
  ]

  return (
    <Layout>
      <Box p={'2rem 0'}>
        <Stack
          gap={'1.5rem'}
          sx={{ background: theme.palette.background.block, padding: '2rem', mb: '5rem', borderRadius: '2rem' }}
        >
          <Link component={'a'} href="#buttons">
            Buttons
          </Link>
          <Link component={'a'} href="#checkboxes">
            Inputs
          </Link>
          <Link component={'a'} href="#checkboxes">
            Checkboxes
          </Link>
          <Link component={'a'} href="#link">
            Link
          </Link>
          <Link component={'a'} href="#tabs">
            Tabs
          </Link>
          <Link component={'a'} href="#dropdown">
            DropDown
          </Link>
          <Link component={'a'} href="#pagination">
            Pagination
          </Link>
          <Link component={'a'} href="#divider">
            Divider
          </Link>
        </Stack>
        <Typography variant="h2" style={{ marginBottom: '1.5rem' }} id={'buttons'}>
          Buttons
        </Typography>
        <Stack gap={'10rem'}>
          <Stack direction={'row'} gap={'2rem'}>
            <Stack gap={'1rem'}>
              <Button>Button text</Button>
              <Button isDisabled>Button text</Button>
              <Button className={'selected'}>Button text</Button>
              <Button isLoading>Button text</Button>
            </Stack>

            <Stack gap={'1rem'}>
              <Button variant={'secondary'}>Button text</Button>
              <Button variant={'secondary'} isDisabled>
                Button text
              </Button>
              <Button variant={'secondary'} className={'selected'}>
                Button text
              </Button>
              <Button variant={'secondary'} isLoading>
                Button text
              </Button>
            </Stack>

            <Stack gap={'1rem'}>
              <Button variant={'transparent'}>Button text</Button>
              <Button variant={'transparent'} isDisabled>
                Button text
              </Button>
              <Button variant={'transparent'} className={'selected'}>
                Button text
              </Button>
              <Button variant={'transparent'} isLoading>
                Button text
              </Button>
            </Stack>
          </Stack>

          <Stack direction={'row'} gap={'2rem'}>
            <Stack gap={'1rem'}>
              <Button size="l">Button text</Button>
              <Button size="l" isDisabled>
                Button text
              </Button>
              <Button size="l" className={'selected'}>
                Button text
              </Button>
              <Button size="l" isLoading>
                Button text
              </Button>
            </Stack>

            <Stack gap={'1rem'}>
              <Button size="l" variant={'secondary'}>
                Button text
              </Button>
              <Button size="l" variant={'secondary'} isDisabled>
                Button text
              </Button>
              <Button size="l" variant={'secondary'} className={'selected'}>
                Button text
              </Button>
              <Button size="l" variant={'secondary'} isLoading>
                Button text
              </Button>
            </Stack>

            <Stack gap={'1rem'}>
              <Button size="l" variant={'transparent'}>
                Button text
              </Button>
              <Button size="l" variant={'transparent'} isDisabled>
                Button text
              </Button>
              <Button size="l" variant={'transparent'} className={'selected'}>
                Button text
              </Button>
              <Button size="l" variant={'transparent'} isLoading>
                Button text
              </Button>
            </Stack>
          </Stack>

          <Stack direction={'row'} gap={'2rem'}>
            <Stack gap={'1rem'}>
              <Button size="round">
                <BurgerIcon />
              </Button>
              <Button size="round" isDisabled>
                <BurgerIcon />
              </Button>
              <Button size="round" className={'selected'}>
                <BurgerIcon />
              </Button>
              <Button size="round" isLoading>
                <BurgerIcon />
              </Button>
            </Stack>

            <Stack gap={'1rem'}>
              <Button size="round" variant={'secondary'}>
                <BurgerIcon />
              </Button>
              <Button size="round" variant={'secondary'} isDisabled>
                <BurgerIcon />
              </Button>
              <Button size="round" variant={'secondary'} className={'selected'}>
                <BurgerIcon />
              </Button>
              <Button size="round" variant={'secondary'} isLoading>
                <BurgerIcon />
              </Button>
            </Stack>

            <Stack gap={'1rem'}>
              <Button size="round" variant={'transparent'}>
                <BurgerIcon />
              </Button>
              <Button size="round" variant={'transparent'} isDisabled>
                <BurgerIcon />
              </Button>
              <Button size="round" variant={'transparent'} className={'selected'}>
                <BurgerIcon />
              </Button>
              <Button size="round" variant={'transparent'} isLoading>
                <BurgerIcon />
              </Button>
            </Stack>
          </Stack>
        </Stack>

        {/* inputs */}
        <Typography variant="h2" style={{ marginBottom: '1.5rem', marginTop: '3em' }} id={'inputs'}>
          Inputs
        </Typography>
        <Stack gap={'1.5rem'}>
          <Input
            label={{ type: 'text', text: 'Label (*optional)' }}
            placeholder={{ type: 'text', text: 'Placeholder' }}
          />
          <Input
            label={{ type: 'text', text: 'With icons' }}
            placeholder={{ type: 'text', text: 'Placeholder' }}
            prefix={<CopyIcon />}
            suffix={<CopyIcon />}
          />
          <Input
            label={{ type: 'text', text: 'Error' }}
            suffix={<CopyIcon />}
            isError
            caption={{ type: 'text', text: 'Something bad happen' }}
          />
          <Input label={{ type: 'text', text: 'Disabled' }} suffix={<CopyIcon />} isDisabled />
          <NumberInput
            label={{ type: 'text', text: 'Number input' }}
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
          />
          <CopyInput
            label={{ type: 'text', text: 'Copy input' }}
            value={copyInput}
            onChange={(e) => setCopyInput(e.target.value)}
          />
        </Stack>

        {/* Checkboxes */}
        <Typography variant="h2" style={{ marginBottom: '1.5rem', marginTop: '3em' }} id={'checkboxes'}>
          Checkboxes
        </Typography>
        <Stack gap={'1rem'}>
          <Checkbox isChecked={false} label={{ type: 'text', text: 'Checkbox' }} />
          <Checkbox isDisabled={true} label={{ type: 'text', text: 'Checkbox disabled' }} />
          <Checkbox isChecked={true} label={{ type: 'text', text: 'Checkbox checked' }} />
          <Checkbox isDisabled={true} isChecked={true} label={{ type: 'text', text: 'Checkbox disabled checked' }} />

          <Radio label={{ type: 'text', text: 'Radio' }} />
          <Radio isDisabled={true} label={{ type: 'text', text: 'Radio disabled' }} />
          <Radio isChecked={true} label={{ type: 'text', text: 'Radio checked' }} />
          <Radio isDisabled={true} isChecked={true} label={{ type: 'text', text: 'Radio disabled checked' }} />

          <CheckboxGroup options={groupValues} value={['v1']} label={{ type: 'text', text: 'Checkbox group' }} />
          <RadioGroup options={groupValues} value={'v2'} label={{ type: 'text', text: 'Radio group' }} />

          <Switch label={{ type: 'text', text: 'Switch inactive' }} />
          <Switch value={true} label={{ type: 'text', text: 'Switch active' }} />
          <Switch value={false} label={{ type: 'text', text: 'Switch  disabled' }} isDisabled />
          <Switch value={true} label={{ type: 'text', text: 'Switch active disabled' }} isDisabled />
        </Stack>

        {/* Link */}
        <Typography variant="h2" style={{ marginBottom: '1.5rem', marginTop: '3em' }} id={'link'}>
          Link
        </Typography>
        <Stack gap={'1rem'}>
          <Link>Link text</Link>
        </Stack>

        {/* Tabs */}
        <Typography variant="h2" style={{ marginBottom: '1.5rem', marginTop: '3em' }} id={'tabs'}>
          Tabs
        </Typography>
        <Stack gap={'3rem'}>
          <Tabs
            tabs={[
              { value: 'tab1', label: 'Week' },
              { value: 'tab2', label: 'Month' },
              { value: 'tab3', label: 'Year' },
            ]}
            setTab={setTab}
            value={tab}
          />
          <Box maxWidth={'10rem'}>
            <Tabs
              tabs={[
                { value: 'tab1', label: 'Week' },
                { value: 'tab2', label: 'Month' },
                { value: 'tab3', label: 'Year' },
              ]}
              setTab={setTab}
              value={tab}
              orientation="vertical"
            />
          </Box>
        </Stack>

        {/* Dropdown */}
        <Typography variant="h2" style={{ marginBottom: '1.5rem', marginTop: '3rem' }} id={'dropdown'}>
          Dropdown
        </Typography>
        <Stack gap={'1rem'} marginBottom={'17rem'}>
          <Select
            options={[
              { value: 'tab1', label: { type: 'text', text: 'Switch active' } },
              { value: 'tab2', label: { type: 'text', text: 'Switch active' } },
              { value: 'tab3', label: { type: 'text', text: 'Switch active' } },
              { value: 'tab4', label: { type: 'jsx', component: <DropdownComponent /> } },
              { value: 'tab5', label: { type: 'text', text: 'Switch active disabled' }, isDisabled: true },
            ]}
            value={'tab1'}
          />
        </Stack>

        {/* Pagination*/}
        <Typography variant="h2" style={{ marginBottom: '1.5rem', marginTop: '3rem' }} id={'pagination'}>
          Pagination
        </Typography>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <Pagination count={11} page={page} onChange={(e) => setPage(Number(e))} />
        </Stack>

        {/* Divider*/}
        <Typography variant="h2" style={{ marginBottom: '1.5rem', marginTop: '3rem' }} id={'divider'}>
          Divider
        </Typography>
        <Stack gap={'5rem'} marginBottom={'5rem'}>
          <Divider />
          <Divider type={'secondary'} />
          <Stack height={'10rem'} alignItems={'center'} justifyContent={'center'}>
            <Divider orientation={'vertical'} />
          </Stack>
        </Stack>
      </Box>
    </Layout>
  )
}

const DropdownComponent = () => (
  <Stack gap={'0.75rem'} direction={'row'} alignItems={'center'}>
    <CrownIcon />
    <Typography variant="body2">Top-100</Typography>
  </Stack>
)

export default devOnly(StoryBook)
