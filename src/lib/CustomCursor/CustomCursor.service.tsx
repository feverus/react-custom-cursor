import { useRef, useState, useEffect } from 'react'
import { UseCustomCursor } from './CustomCursor.props'

export const useCustomCursor:UseCustomCursor = (
    setOuterCursorActive,
    rotating,
  ) => {
  const ref = useRef<HTMLDivElement>(null)
  const [focused, setFocused] = useState(false)
  const [unmounting, setUnmounting] = useState(false)
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0])
  const [angle, setAngle] = useState(0)
  const [innerCursorActive, setInnerCursorActive] = useState(false)

  const offsetCoordinates = useRef<[number, number]>([0, 0])
  const sourceSize = useRef<[number, number]>([0, 0])
  const sourceCenterCoordinates = useRef<[number, number]>([0, 0])


  const activate = () => { 
    const divRect = ref.current?.getBoundingClientRect()
    if (divRect) {
      offsetCoordinates.current = [divRect?.x, divRect?.y]
      sourceSize.current = [divRect?.width, divRect?.height]
      sourceCenterCoordinates.current = [divRect?.x + (divRect?.width / 2), divRect?.y + (divRect?.height / 2)]
    }
    
    if (setOuterCursorActive) {
      setOuterCursorActive(true)
    }
    setFocused(true)
    setUnmounting(false)
  }
  
  const deActivate = () => {
    if (setOuterCursorActive) {
      setOuterCursorActive(false)
    }
    setFocused(false)    
  }

  const mouseMove = (e:MouseEvent) => {
    const [x, y] = offsetCoordinates.current
    const [x0, y0] = sourceCenterCoordinates.current
    
    rotating && setAngle(Math.atan2(e.clientY - y0, e.clientX - x0))
    setMousePosition([e.clientX - x, e.clientY - y])
  }
 
  useEffect(() => {
    const element = ref.current
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

  useEffect(() => {
    if (unmounting) setTimeout(() => setInnerCursorActive(true), 200)
    else setTimeout(() => setInnerCursorActive(false), 200)
    return () => {
      setInnerCursorActive(false)
    }
  }, [unmounting])  

  return([
    ref,
    focused,
    unmounting,
    mousePosition,
    angle,
    innerCursorActive,
    (value: boolean) => setUnmounting(value),
  ])
}

