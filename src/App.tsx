import { useState } from 'react'
import './App.css'
import { CustomCursor, RotatingArrow, LaserDot, CircleWithText } from './lib'

const raz = (count: number) => {
  const n = count % 100
  if (n === 2 || n === 3 ) return 'раза'
  return 'раз'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='fullwidth'>

      <div>
        <CustomCursor cursor={LaserDot}>
          <div className='exampleOne'>
            Базовый пример
            <button onClick={() => setCount(count + 1)}>
              Нажата {count} {raz(count)}
            </button>
          </div>
        </CustomCursor>

        <textarea disabled>{`
<CustomCursor cursor={LaserDot}>
  <div className='exampleOne'>
    Базовый пример
    <button onClick={() => setCount(count + 1)}>
      Нажата {count} раз
    </button>
  </div>
</CustomCursor>
        `}</textarea>
      </div>

      <div>
        <CustomCursor cursor={RotatingArrow} rotating={true}>
          <div className='exampleTwo'>
            Пример с вращающейся вокруг центра стрелкой
            
            <button onClick={() => setCount(count + 1)}>
              Нажата {count} раз
            </button>
          </div>
        </CustomCursor>  

        <textarea disabled>{`
<CustomCursor cursor={RotatingArrow} rotating={true}>
  <div className='exampleTwo'>
    Пример с вращающейся вокруг центра стрелкой
    
    <button onClick={() => setCount(count + 1)}>
      Нажата {count} раз
    </button>
  </div>
</CustomCursor>
        `}</textarea>
      </div>

      <div>
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

        <textarea disabled>{`
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
        `}</textarea>
      </div>

      <div>
        <CustomCursor cursor={LaserDot}>
          <div className='exampleShell'>
          Пример вложенный с меняющимся при наведении курсором
            <CustomCursor cursor={<CircleWithText text={'I change my style when hover'} color={'#303090'} />} rotating='auto' hoverClassName='hoverOne'>
              <div className='exampleTwo'>
                Пример с <a href="">ссылкой</a>
                
                <button onClick={() => setCount(count + 1)}>
                  Нажата {count} раз
                </button>
              </div>
            </CustomCursor>     
          </div>
        </CustomCursor>   

        <textarea disabled>{`
<CustomCursor cursor={LaserDot}>
  <div className='exampleShell'>
    Пример вложенный с меняющимся при наведении курсором
    <CustomCursor cursor={<CircleWithText text={'I change my style when hover'} color={'#303090'} />} rotating='auto' hoverClassName='hoverOne'>
      <div className='exampleTwo'>
        Пример с <a href="">ссылкой</a>
        
        <button onClick={() => setCount(count + 1)}>
          Нажата {count} раз
        </button>
      </div>
    </CustomCursor>     
  </div>
</CustomCursor>
        `}</textarea>        
      </div>

      <div>
        <CustomCursor cursor={<CircleWithText text={'Custom cursor example'} color={'#9000bf'} />} >
          <div className='exampleOne'>
            Пример с текстом в окружности
            
            <button onClick={() => setCount(count + 1)}>
              Нажата {count} раз
            </button>
          </div>
        </CustomCursor>  

        <textarea disabled>{`
<CustomCursor cursor={<CircleWithText text={'Custom cursor example'} color={'#9000bf'} />} >
<div className='exampleOne'>
  Пример с текстом в окружности
  
  <button onClick={() => setCount(count + 1)}>
    Нажата {count} раз
  </button>
</div>
</CustomCursor>
        `}</textarea>  
      </div>

      <div>
        <CustomCursor cursor={<CircleWithText text={'Spin Me Round (Like a Record)'} color={'#109010'} />} rotating='onMove'>
          <div className='exampleTwo'>
            Вращающийся при движении мыши
            
            <button onClick={() => setCount(count + 1)}>
              Нажата {count} раз
            </button>
          </div>
        </CustomCursor>

        <textarea disabled>{`
<CustomCursor cursor={<CircleWithText text={'Spin Me Round (Like a Record)'} color={'#109010'} />} rotating='onMove'>
  <div className='exampleTwo'>
    Вращающийся при движении мыши
    
    <button onClick={() => setCount(count + 1)}>
      Нажата {count} раз
    </button>
  </div>
</CustomCursor>
        `}</textarea>        
      </div>

      <div>
        <CustomCursor cursor={<CircleWithText text={'I spin when i want'} color={'#eeeeee'} donutColor={'#303090'} />} rotating='auto'>
          <div className='exampleOne'>
            Вращающийся автоматически
            
            <button onClick={() => setCount(count + 1)}>
              Нажата {count} раз
            </button>
          </div>
        </CustomCursor>  

        <textarea disabled>{`
<CustomCursor cursor={<CircleWithText text={'I spin when i want'} color={'#eeeeee'} donutColor={'#303090'} />} rotating='auto'>
<div className='exampleOne'>
  Вращающийся автоматически
  
  <button onClick={() => setCount(count + 1)}>
    Нажата {count} раз
  </button>
</div>
</CustomCursor>
        `}</textarea>
      </div>

    </div>

    
  )
}

export default App