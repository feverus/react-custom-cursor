import { useState } from 'react'
import './App.css'
import { CustomCursor } from './lib/'

const muCursor = <div
style={{borderRadius:'50%', width:'10px', height:'10px', backgroundColor: 'red',}}></div>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomCursor cursor={muCursor}>
        <div className='exampleOne'>
          Пример 1
          <button onClick={() => setCount(count + 1)}>
            Нажата {count} раз
          </button>
        </div>
      </CustomCursor>      
    </>
  )
}

export default App