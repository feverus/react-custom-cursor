import { useState } from 'react'
import './App.css'
import { CustomCursor, RotatingArrow, LaserDot, CircleWithText } from './lib/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='fullwidth'>
      <CustomCursor cursor={LaserDot}>
        <div className='exampleOne'>
          Базовый пример
          <button onClick={() => setCount(count + 1)}>
            Нажата {count} раз
          </button>
        </div>
      </CustomCursor>

      <CustomCursor cursor={RotatingArrow} rotating={true}>
        <div className='exampleTwo'>
          Пример с вращающейся стрелкой
          
          <button onClick={() => setCount(count + 1)}>
            Нажата {count} раз
          </button>
        </div>
      </CustomCursor>  

      <CustomCursor cursor={LaserDot}>
        <div className='exampleShell'>
          Пример вложенный
          <CustomCursor cursor={LaserDot} scale={3}>
            <div className='exampleTwo'>
              Пример с измененным размером курсора
              
              <button onClick={() => setCount(count + 1)}>
                Нажата {count} раз
              </button>
            </div>
          </CustomCursor>     
        </div>
      </CustomCursor>   

      <CustomCursor cursor={<CircleWithText text={'Custom cursor example'} color={'#9000bf'} />} >
        <div className='exampleOne'>
          Пример с текстом в окружности
          
          <button onClick={() => setCount(count + 1)}>
            Нажата {count} раз
          </button>
        </div>
      </CustomCursor>  
    </div>
  )
}

export default App