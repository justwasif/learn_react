import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'



export default function Card10() {
  const [count,setcount]=useState(0)
  let myobj={username:"me",age:18}
  return (
    <>
    <h1 className='bg-green-400'>tailwind</h1>
    <Card username="10" pri="amount"/>
    <Card username="100" channel="ye" info={myobj}/>
    </>
  );
}


