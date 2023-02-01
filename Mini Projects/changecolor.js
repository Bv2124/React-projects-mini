import React,{useState} from "react";

export default function Clr(){
    const[color,setColor]=useState({color:'green'})
    const changecolor = () =>{
        setColor({color:'red'})
    }
    const changecolo = () =>{
        setColor({color:'black'})
    }
    const changecol = () =>{
        setColor({color:'grey'})
    }
    return(
    <div>
    <h1 style={color}>Hello</h1>
    <button onClick={changecolor}>red</button>
    <button onClick={changecolo}>black</button>
    <button onClick={changecol}></button>
    </div>
    )
}