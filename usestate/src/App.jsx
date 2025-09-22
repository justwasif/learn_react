import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount] = useState(15)
  let [messege,setmessege]=useState('')
  //let a=10
  const addValue =()=>{
    setmessege('')
    console.log("add",count);
    if (count<20){
      setcount((prevupdated)=>prevupdated +1)
      setcount((prevupdated)=>prevupdated+1)
    }
    else if(count==20){
      setmessege("max limit has been reach so it reset to 0")
      setcount(0)
    }
    // else if(count==20){
    //   setcount(0)
    // }
    // else if(count!=20){
    //   setmessege('')
    // }
    // else if(count==21){
    //   //count=count-20;
    //   setcount(0)

    // }
      


  }
  const removeval=()=>{
    console.log("remove",count)
    if(count>0){
      count=count-1;
      setcount(count)
    }
    else{
      setmessege("lowest limit has been reached")
    }
    
  }

  return (
    <>
      <h1>chai <br />{count}</h1>
      <button onClick={addValue} >inc </button>
      <button onClick={removeval} >dec</button>
      <p> {messege}</p>
    </>
  )
}

export default App
