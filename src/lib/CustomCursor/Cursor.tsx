import { CursorProps } from './CustomCursor.props';
import styles from './CustomCursor.module.scss';

export const Cursor = ({ cursor, x, y, angle, scale, unmounting }: CursorProps) => {
  let style = unmounting ?
    styles.cursorWrapper + ' ' + styles.unmounting :
    styles.cursorWrapper

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