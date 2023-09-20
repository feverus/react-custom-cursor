import { useRef, useState, useEffect } from 'react'
import { UseCustomCursor } from './CustomCursor.props'

export const useCustomCursor:UseCustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [focused, setFocused] = useState(false)
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0])
  const offsetCoordinates = useRef<[number, number]>([0, 0])
  const element = ref.current

  const activate = () => {
    const divRect = element?.getBoundingClientRect()
    divRect && (offsetCoordinates.current = [divRect?.x, divRect?.y])
    setFocused(true)
  }
  const deActivate = () => {
    setFocused(false)
  }
  const mouseMove = (e:MouseEvent) => {
    const [x, y] = offsetCoordinates.current
    setMousePosition([e.clientX - x, e.clientY - y])
  }
 
  useEffect(() => {   
    if (element) {
      element.addEventListener('mouseenter', activate)
      element.addEventListener('mouseleave', deActivate)
      element.addEventListener('mousemove', mouseMove)
    }
  
    return () => {
      if (element) {
        element.removeEventListener('mouseenter', activate)
        element.removeEventListener('mouseleave', deActivate)
        element.removeEventListener('mousemove', mouseMove)
      }
    }
  }, [])

  return([
    ref,
    focused,
    mousePosition,
  ])
}