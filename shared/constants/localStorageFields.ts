export const LOCAL_STORAGE_FIELDS = {
  i18n: 'i18n',
} as const

export type LocalStorageFieldsKeys = keyof typeof LOCAL_STORAGE_FIELDS
