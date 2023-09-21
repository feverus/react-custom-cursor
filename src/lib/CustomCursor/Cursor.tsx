import { CursorProps } from './CustomCursor.props';
import styles from './CustomCursor.module.scss';

export const Cursor = ({ cursor, x, y, angle, unmounting }: CursorProps) => {
  let style = unmounting ?
    styles.cursorWrapper + ' ' + styles.unmounting :
    styles.cursorWrapper

  return (
    <div
      className={style}
      style={{ left: x, top: y, transform: `rotate(${angle}rad)` }}
    >
      <div className={styles.cursor}>
        <div className={styles.forCenter}>{cursor}</div>
      </div>
    </div>
  )
}