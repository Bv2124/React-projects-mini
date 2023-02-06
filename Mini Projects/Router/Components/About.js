import React from "react";
const Aboutsty = {
    backgroundColor:'white',
    fontSize: '1.5em',
    fontWeight:'600',
    zIndex:'-3'
}
export default function About(){
    return(<div style={Aboutsty}>
        <h2>Hello man this is the About section of our website</h2>

        Read more about us at : 
        <a href="https://www.geeksforgeeks.org/about/">
            https://www.geeksforgeeks.org/about/
        </a>
    </div>)
}