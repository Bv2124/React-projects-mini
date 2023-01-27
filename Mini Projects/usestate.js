import {data} from './data'
import {useState} from 'react'
export default function Counter(){
    const [user,setUser]= useState(0)
    const [use,setUse]= useState(false)
    let prev = user > 0;
    let next = user < data.length -1;
    function handle() {
        if (prev) {
          setUser(user - 1);
        }
      }
      function handl() {
        if (next) {
          setUser(user + 1);
        }
      }
      function click(){
        setUse(!use)
      }
      function Reset(){
        setUser(user*0)
      }
    let userNo = data[user]
    return(
        <div>
<button onClick={handle} disabled={!prev}>Previous</button>
<button onClick={handl}disabled={!next}>next</button>
<button onClick={Reset}>Reset</button>
<button onClick={click}>{use?'hide':'show'}details</button>
{use && <p>Hey buddy happy to meet you !!</p>}
<h2>{userNo.address.city}</h2>
<h2>{userNo.email}</h2>
        </div>
    )
}
