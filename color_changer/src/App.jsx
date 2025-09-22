import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]=useState("white")
  const changecolor=()=>{
    console.log("color changed to red");
  }
  return (
    <>
    <div className='w-full h-screen ' style={{background:color}}>
      <div className='fixed flex-wrap justify-center bottom-12 insert-x-0 px-2 '>
        <div className='fixed flex-wraap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setcolor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setcolor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setcolor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setcolor('olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"olive"}}>olive</button>
          <button onClick={()=>setcolor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor:"black"}}>black</button>

        </div>
      </div>
    </div>

    </>
  )
}

export default App



