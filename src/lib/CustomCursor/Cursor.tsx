import { CursorProps } from './CustomCursor.props';
import styles from './CustomCursor.module.scss';

export const Cursor = ({ cursor, x, y, angle }: CursorProps) => {
  return (
    <div
      className={styles.cursor}
      style={{ left: x, top: y, transform: `rotate(${angle}rad)` }}
    >
      {cursor}
    </div>
  )
}