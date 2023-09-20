import React, { RefObject, PropsWithChildren } from "react"

export interface CustomCursorProps extends PropsWithChildren {
  cursor?: React.JSX.Element | string,
}

export type UseCustomCursor = () => [
  ref: RefObject<HTMLDivElement>,
  focused: boolean,
  mousePosition: [number, number],
]

export type CursorProps = {
  cursor: React.JSX.Element | string,
  x: number,
  y: number,
}