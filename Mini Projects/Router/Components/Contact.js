import React from "react";
const Contactsty={
        backgroundColor:'white',
        fontSize: '2em',
        fontWeight:'800'
    }

export default function Contact(){
    return(<div style={Contactsty}>
        <address>
        You can find us here:<br />
            GeeksforGeeks<br />
            5th & 6th Floor, Royal Kapsons, A- 118, <br />
            Sector- 136, Noida, Uttar Pradesh (201305) 
        </address>
    </div>)
}