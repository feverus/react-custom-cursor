import { createContext, useContext } from 'react'
import { useCustomCursor } from './CustomCursor.service'
import { CustomCursorProps } from './CustomCursor.props'
import styles from './CustomCursor.module.scss'
import { Cursor } from './Cursor'

const InnerContext = createContext<((value:boolean) => void) | null>(null)

export default function CustomCursor({
    children,
    cursor = 'Кастомный курсор',
    rotating = false,
    scale = 1,
  } : CustomCursorProps) {

  const setOuterCursorActive = useContext(InnerContext)

  const [
    ref,
    focused,
    unmounting,
    [x, y],
    angle,
    innerCursorActive,
    setInnerCursorActive,
  ] = useCustomCursor(setOuterCursorActive, rotating)

  return (    
      <div
        ref={ref}
        className={focused ?  styles.shell + ' ' + styles.active : styles.shell}
      >
        <InnerContext.Provider value={setInnerCursorActive}>
          {children}
        </InnerContext.Provider>

        {focused && !innerCursorActive && 
          <Cursor
            cursor={cursor}
            x={x}
            y={y}
            angle={rotating?angle:0}
            scale={scale}
            unmounting={unmounting}
          />
        }
      </div>
  )
}