import styles from './CircleWithText.module.scss'
import { CircleWithTextProps } from './CircleWithText.props'

const CircleWithText = ({
  text = '...',
  color = 'black',
  donutColor = '#eeeeee90',
}: CircleWithTextProps) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      width="100" height="100"
    >
      <defs>
        <path d="M250 440C145.114 440 60 354.886 60 250C60 145.114 145.114 60 250 60C354.886 60 440 145.114 440 250C440 354.886 345.351 440 240.465 440H250Z" id="textcircle" />
      </defs> 
      <circle cx="250" cy="250" r="200" fill="transparent" 
        strokeWidth="80" stroke={donutColor}
      id="background" />
      <text dy="0" className={styles.text} fill={color}>
        <textPath xlinkHref="#textcircle">
          {text}
        </textPath>
      </text>
    </svg>
  )
}

export default CircleWithText