import '@mui/material/styles/createPalette'

type AlertsType = Record<'success' | 'error', string>
type SystemType = Record<'yellow' | 'red' | 'blue', string>
type GeneralType = Record<'disabled' | 'secondary' | 'divider' | 'input' | 'border' | 'secondaryText' | 'hover', string>

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    main?: string
  }

  interface TypeBackground {
    dark: string
    light: string
    block: string
    block2: string
  }

  interface SimplePaletteColorOptions {
    main?: string
    hover?: string
    active?: string
  }

  interface PaletteColor {
    main: string
    hover?: string
    active?: string
  }

  interface Palette extends MuiPallete {
    [key: string]: never
    alerts: AlertsType
    system: SystemType
    general: GeneralType
  }

  interface PaletteOptions extends MuiPaletteOptions {
    alerts: AlertsType
    system: SystemType
    general: GeneralType
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    buttonText: React.CSSProperties
    label: React.CSSProperties
    link: React.CSSProperties
  }

  interface Theme {
    overrides: Record<string, unknown>
  }

  interface ThemeOptions {
    props: unknown
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    buttonText?: React.CSSProperties
    label?: React.CSSProperties
    link?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    h3: true
    h4: true
    subtitle1: true
    subtitle2: true
    body1: true
    body2: true
    link: true
    label: true
    buttonText: true
  }
}
