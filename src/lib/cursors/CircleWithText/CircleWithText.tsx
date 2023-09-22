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
        <path d="M243.2, 382.4c-74.8,   
        0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
        135.5 S318, 382.4, 243.2, 382.4z" id="textcircle" />
      </defs> 
      <circle cx="250" cy="250" r="155" fill="transparent" 
        strokeWidth="100" stroke={donutColor}
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