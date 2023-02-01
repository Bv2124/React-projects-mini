import React,{useState} from "react";

export default function Clr(){
    const[color,setColor]=useState({
        color:'white',
        backgroundColor:'grey',
        fontSize:"2em"
    })
    const changecolor = () =>{
        setColor({
            color:'red',
            backgroundColor:'black',
            fontSize:"3em"
        }
            )
    }
    const changecolo = () =>{
        setColor({
            color:'blue',
            backgroundColor:'lightblue',
            fontSize:"4em"}
            )
    }
    const changecol= () =>{
        setColor({
            color:'pink',
            backgroundColor:'green',
            fontSize:"5em"}
            )
    }
   
    return(
    <div>
    <h1 style={color}>Hello buddy !</h1>
    <button onClick={changecolor}>red</button>
    <button onClick={changecolo}>blue</button>
    <button onClick={changecol}>Pink</button>
    </div>
    )
}