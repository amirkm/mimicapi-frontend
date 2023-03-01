import { useEffect } from 'react'

export default function useClickOutside<T extends HTMLElement>(elementRef: React.RefObject<T>, callback: Function): void {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mouseup', handleClick)
    return () => {
      document.removeEventListener('mouseup', handleClick)
    }
  }, [elementRef])
}
