import React, { RefObject, PropsWithChildren } from "react"

export interface CustomCursorProps extends PropsWithChildren {  
  cursor?: React.JSX.Element | string,
  rotating?: boolean,
  scale?: number,
}

export type ContextProps = {
  setInnerCursorActive:((value:boolean) => void) | null
}

export type UseCustomCursor = (
    setInnerCursorActive: ((value:boolean) => void) | null,
    rotating: boolean
  ) => [
  ref: RefObject<HTMLDivElement>,
  focused: boolean,
  unmounting: boolean,
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
}
