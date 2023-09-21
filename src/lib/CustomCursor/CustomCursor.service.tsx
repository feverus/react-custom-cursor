import { useRef, useState, useEffect } from 'react'
import { UseCustomCursor } from './CustomCursor.props'

export const useCustomCursor:UseCustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [focused, setFocused] = useState(false)
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0])
  const [angle, setAngle] = useState(0)

  const offsetCoordinates = useRef<[number, number]>([0, 0])
  const sourceSize = useRef<[number, number]>([0, 0])
  const sourceCenterCoordinates = useRef<[number, number]>([0, 0])
  const element = ref.current

  const activate = () => {
    const divRect = element?.getBoundingClientRect()
    if (divRect) {
      offsetCoordinates.current = [divRect?.x, divRect?.y]
      sourceSize.current = [divRect?.width, divRect?.height]
      sourceCenterCoordinates.current = [divRect?.x + (divRect?.width / 2), divRect?.y + (divRect?.height / 2)]
    }
    setFocused(true)
  }
  
  const deActivate = () => {
    setFocused(false)
  }

  const mouseMove = (e:MouseEvent) => {
    const [x, y] = offsetCoordinates.current
    const [x0, y0] = sourceCenterCoordinates.current
    
    setAngle(Math.atan2(e.clientY - y0, e.clientX - x0))
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
    angle,
  ])
}