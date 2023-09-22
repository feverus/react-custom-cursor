import { useState } from 'react'
import './App.css'
import { CustomCursor, RotatingArrow, LaserDot } from './lib/'

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
    </div>
  )
}

export default App