import isEqual from 'lodash/isEqual'
import { EffectCallback, useEffect, useRef } from 'react'

const useDeepEffect = (fn: EffectCallback, dependencies: any[] = [], comparisonFn = isEqual): void => {
  const isFirst = useRef(true)
  const prevDeps = useRef(dependencies)

  useEffect(() => {
    const isSame = prevDeps.current.every((obj, index) => comparisonFn(obj, dependencies[index]))

    if (isFirst.current || !isSame) {
      fn()
    }

    isFirst.current = false
    prevDeps.current = dependencies
  }, dependencies)
}

export default useDeepEffect
