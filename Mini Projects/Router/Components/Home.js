import React from "react";
const Welcome ={
    backgroundColor:'white',
    fontSize: '2em',
    fontWeight:'800'
}
export default function Home({name}){
    return(
    <div>
        <div style={Welcome}>
        Welcome to the Home !!
        My dear {name}
        </div>
    </div>
    )
}