import { Button } from '@mui/material'
import React from 'react'
import { useEffect,useState } from 'react'
export const Use = () => {
const [name,setName]=useState(0)
const [state,setState]=useState({
    name:"",
    select:false
})
const handleadd = ()=>{
    setState((prev)=> ({...prev,name}))
}
const handlead = ()=>{
    setState((prev)=> ({...prev,select:true}))
}
useEffect(()=>{
console.log("the state")
// WE CAN SEE ABOVE WHEN RENDER HAPPENS
console.count("the state")
},[name])
  return (
    <div><br></br>Use Effect
    <input  type="text" onChange={(H)=>setName(H.target.value)}></input>
    <Button onClick={handleadd}>Set</Button>
    {`{
        name:${state.name},
        selected:${state.select.toString()},
    }`}
    <Button onClick={handlead}>Select</Button>
    </div>
  )
}
