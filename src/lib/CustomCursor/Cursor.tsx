import { CursorProps } from './CustomCursor.props';
import styles from './CustomCursor.module.scss';

export const Cursor = ({ cursor, x, y, angle, scale, unmounting, rotating }: CursorProps) => {
  let style = styles.cursorWrapper
  if (unmounting) style = style + ' ' + styles.unmounting
  if (rotating === 'auto') style = style + ' ' + styles.smooth

  return (
    <div
      className={style}
      style={{ 
        left: x,
        top: y,
        transform: `rotate(${angle}rad) scale(${scale})`,
      }}
    >
      <div className={styles.cursor}>
        <div className={styles.forCenter}>{cursor}</div>
      </div>
    </div>
  )
}