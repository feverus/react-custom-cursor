import React, { RefObject, PropsWithChildren } from "react"

export type RotatingType = boolean | 'auto' | 'onMove'

export interface CustomCursorProps extends PropsWithChildren {  
  cursor?: React.JSX.Element | string,
  rotating?: RotatingType,
  scale?: number,
  hoverClassName?: string,
}

export type ContextProps = {
  setInnerCursorActive:((value:boolean) => void) | null
}

export type UseCustomCursor = (
    setInnerCursorActive: ((value:boolean) => void) | null,
    rotating: RotatingType
  ) => [
  ref: RefObject<HTMLDivElement>,
  focused: boolean,
  unmounting: boolean,
  hovered: boolean,
  mousePosition: [number, number],
  angle: number,
  innerCursorActive: boolean,
  setInnerCursorActive: (value:boolean) => void,
]

export type CursorProps = {
  cursor: React.JSX.Element | string,
  x: number,
  y: number,
  angle: number,
  scale: number,
  unmounting: boolean,
  rotating: RotatingType,
  hoverClassName: string,
}
