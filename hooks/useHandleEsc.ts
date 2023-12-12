import { useCallback, useEffect } from 'react'

/**
 * A custom React hook to execute a callback when the Escape key is pressed.
 *
 * @category hooks
 * @param {() => void} cb - The action to perform when the Escape key is pressed.
 */
const useHandleEsc = (cb: () => void) => {
  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') cb()
    },
    [cb]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false)

    return () => {
      document.removeEventListener('keydown', handleEsc, false)
    }
  }, [handleEsc])
}

export default useHandleEsc
