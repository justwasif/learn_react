import { useEffect,useState } from "react"

function usecurruncyInfo(){
    const[data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/d0d1a42851bf469e47c8ba2b/latest/${currency}`).then((res)=>res.json()).then((res)=>setdata(res[currency]))
    },[currency])
    return data

}
export default usecurruncyInfo;