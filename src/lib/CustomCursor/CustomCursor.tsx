import { useCustomCursor } from './CustomCursor.service'
import { CustomCursorProps, CursorProps } from './CustomCursor.props'
import styles from './CustomCursor.module.scss'

const Cursor = ({cursor, x, y}: CursorProps) => {
  return (
    <div
      className={styles.cursor}
      style={{left:x, top:y}}
    >
      {cursor}
    </div>
  )
}

export default function CustomCursor({children, cursor = 'Кастомный курсор'} : CustomCursorProps) {
  const [
    ref,
    focused,
    [x, y],
  ] = useCustomCursor()
  
  return (
    <div
      ref={ref}
      className={focused ? styles.active : ''}
    >
      {children}

      {focused && <Cursor cursor={cursor} x={x} y={y} />}
    </div>
  )
}