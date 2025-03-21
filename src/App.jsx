import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div  style={{backgroundColor:color}} className='w-full h-screen duration-200'  >
          <div className=' flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-red-500'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
               <button onClick={()=>setColor("red")} className='outline-none px-4 text-white' style={{backgroundColor:"red"}}>Red</button>
               <button onClick={()=>setColor("green")} className='outline-none px-4 text-white' style={{backgroundColor:"green"}}>Red</button>
               <button onClick={()=>setColor("pink")} className='outline-none px-4 text-white' style={{backgroundColor:"pink"}}>Red</button>
            </div>   
        </div>
      </div>
      {/* <div style={{backgroundColor:color}} className='w-full h-screen'>
          <div className='bottom-10'>Test</div>          
      </div> */}
    </>
  )
}

export default App
