import { debounce, DebounceSettings } from 'lodash'
import { useCallback } from 'react'

const DEFAULT_TIME = 1000

type AnyFunction = (...args: any[]) => any

const useDebounce = <T extends AnyFunction>(func: T, wait = DEFAULT_TIME, options?: DebounceSettings) => {
  const debounced = useCallback(debounce(func, wait, options), [func])

  return debounced
}

export default useDebounce
