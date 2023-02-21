import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
export default function GetMethod(){
    useEffect(()=>{
        (async ()=>{
          try{
            const result = await axios.get(
              "https://reqres.in/api/unknown" 
            )
            console.log(result.data)
          }
          catch(error){
            console.error(error)
          }
        })()
      })
    return(<div>
        Using get method to fetch data from an url
    </div>)
}