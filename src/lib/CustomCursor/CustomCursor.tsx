import { useCustomCursor } from './CustomCursor.service'
import { CustomCursorProps } from './CustomCursor.props'
import styles from './CustomCursor.module.scss'
import { Cursor } from './Cursor'

export default function CustomCursor({
  children,
  cursor = 'Кастомный курсор',
  rotating = false,
} : CustomCursorProps) {
  const [
    ref,
    focused,
    [x, y],
    angle,
  ] = useCustomCursor()
  
  return (
    <div
      ref={ref}
      className={focused ? styles.active : ''}
    >
      {children}

      {focused && 
        <Cursor
          cursor={cursor}
          x={x}
          y={y}
          angle={rotating?angle:0}
        />
      }
    </div>
  )
}
