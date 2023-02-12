import { useState,useEffect } from "react";
export default function Effect (){
    const url ="https://jsonplaceholder.typicode.com/users"
    const [users,setusers]=useState();
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setusers(data))},[])
    return(<div>
        <h1>useEffect</h1>
        <p>useEffect is a hook that runs after the component is rendered</p>
        {users && users.map(user => <li>{user.username}</li>)}
    </div>)
}