import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght,setlength]=useState(8)
  const [num,setnum]=useState(false)
  const [char,setchar]=useState(true)
  const [Password,setpassword]=useState('')

  const Password_generaator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(num) str+="1234567890"
    if(char) str+="!@#$%^&*"
  },[lenght,num,char,setpassword])

  for(let i=1;i<=Array.lenght;i++){
    let random=Math.floor(Math.random()*str.length+1)
    pass=str.charAt(char)
  }
  return (
    <h1 className='text-white text-4xl text-center'>Password generator</h1>
  
  )
}

export default App


