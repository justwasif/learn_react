import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght,setlength]=useState(8)
  const [num,setnum]=useState(false)
  const [char,setchar]=useState(true)
  const [Password,setpassword]=useState('')

  const passwordref=useRef(null)

  const Password_generaator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(num) str+="1234567890"
    if(char) str+="!@#$%^&*"

    for(let i=1;i<=lenght;i++){
    let random=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(random)
  }
  setpassword(pass)
  
  },[lenght,num,char,setpassword])

  const copytoclipboard=useCallback(()=>{
    passwordref.current?.select();
   // passwordref.current?.setSelectionRANGE(0,3)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  
  useEffect(()=>{
    Password_generaator()
  },[lenght,num,char,Password_generaator])

  return (
    <div className='w-full max-w-md mx-auto bg-gray-700 text-orange-400 text-4xl text-center'>
      <h1 className='text-white text-center'>password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={Password} className='outline-non w-full py-1 px-3' placeholder='password'readOnly ref={passwordref}></input>
      <button className='bg-red-700' onClick={copytoclipboard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={lenght} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
          <label>lenght:{lenght}</label>
        </div>
        <div className='flex item-centre gap-x-1'>
          <input type='checkbox' defaultChecked={num} id='numberInput' onChange={()=>{ setnum((prev)=>!prev);}}/>
          <label>number only</label> 
        </div>
        <div className='flex item-center gap-x-1'>
          <input type='checkbox' defaultChecked={char} id='charcterInput' onChange={()=>{ setchar((prev)=>!prev);}}/>
          <label>character</label>
        </div>
      </div>
    </div>

  
  )
}

export default App
//kal

