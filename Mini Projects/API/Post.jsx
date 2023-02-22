import axios from "axios";
import { useEffect } from "react";
import { useState,useRef } from "react";
export default function Post(){
    const [passwordType,setPasswordType]=useState('password')
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const onSubmit =(e)=>{
        e.preventDefault()
    }
    const setpass= ()=>{
     if(passwordType==="password")
     {
        setPasswordType("text")
        return;
     }
     setPasswordType("password")
    }
    useEffect(()=>{
        axios.post('https://reqres.in/api/users', {
                firstName:nameRef.current.value,
                email: emailRef.current.value,
                password:passwordRef.current.value,
                id:'20'
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    },[onSubmit])
    return(
    <div>
        Enter your details here!!
        <form>
            <label>Name</label>
            <input ref={nameRef}type='text'></input>
            <label>E-mail</label>
            <input ref={emailRef}type='email'></input>
            <label>Password</label>
            <input ref={passwordRef}type={passwordType}></input>
            <button onClick={setpass}>{passwordType==="password"?<i>view</i>:(<i>Hide</i>)}</button><br></br>
            <button onClick={onSubmit}> Submit</button>
        </form>
    </div>
    )
}