import { useRef, useState, useEffect } from 'react'
import { UseCustomCursor } from './CustomCursor.props'

export const useCustomCursor:UseCustomCursor = (
    setOuterCursorActive,
    rotating,
  ) => {
  const ref = useRef<HTMLDivElement>(null)
  const [focused, setFocused] = useState(false)
  const [unmounting, setUnmounting] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0])
  const [angle, setAngle] = useState(0)
  const [innerCursorActive, setInnerCursorActive] = useState(false)

  const offsetCoordinates = useRef<[number, number]>([0, 0])
  const sourceSize = useRef<[number, number]>([0, 0])
  const sourceCenterCoordinates = useRef<[number, number]>([0, 0])
  const rotateInterval = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const randomRotateCursor = () => {
    setAngle(angle + (Math.random() - 0.5) * 6)
  }

  const activate = () => {     
    console.log('activate')
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
    clearTimeout(rotateInterval.current)
    if (setOuterCursorActive) {
      setOuterCursorActive(false)
    }
    setFocused(false)    
  }

  const mouseMove = (e:MouseEvent) => {
    const [x, y] = offsetCoordinates.current
    const [x0, y0] = sourceCenterCoordinates.current
    
    if (rotating===true) setAngle(Math.atan2(e.clientY - y0, e.clientX - x0))
    if (rotating==='onMove') setAngle(angle + 0.01)

    setMousePosition([e.clientX - x, e.clientY - y])
  }

  const mouseOver = (e:MouseEvent) => {
    if (e.target===null || hovered===true) return
    const tag = (e.target as Element).tagName.toLowerCase()
    if (tag==='a' || tag==='button') {
      e.stopPropagation()
      setHovered(true)
    }
  }

  const mouseOut = (e:MouseEvent) => {
    if (e.target===null || hovered===false) return
    const tag = (e.target as Element).tagName.toLowerCase()
    if (tag==='a' || tag==='button') {
      e.stopPropagation()
      setHovered(false)
    }
  }
 
  useEffect(() => {
    clearTimeout(rotateInterval.current)
    if (focused && (rotating==='auto')) rotateInterval.current = setTimeout(randomRotateCursor, 1000)

    const element = ref.current
    if (element) {      
      element.addEventListener('mouseenter', activate)
      element.addEventListener('mouseleave', deActivate)
      element.addEventListener('mousemove', mouseMove)
      element.addEventListener('mouseover', mouseOver)
      element.addEventListener('mouseout', mouseOut)
    }
  
    return () => {
      clearTimeout(rotateInterval.current)
      if (element) {
        element.removeEventListener('mouseenter', activate)
        element.removeEventListener('mouseleave', deActivate)
        element.removeEventListener('mousemove', mouseMove)        
        element.addEventListener('mouseover', mouseOver)
        element.addEventListener('mouseout', mouseOut)
      }
    }
  }, [angle, focused, hovered])  

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
    hovered,
    mousePosition,
    angle,
    innerCursorActive,
    (value: boolean) => setUnmounting(value),
  ])
}

