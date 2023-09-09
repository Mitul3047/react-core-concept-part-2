import { useState } from "react"

export default function User(){
   const userStyle ={
    border : '2px solid purple',
    margin : '10px',
    borderRadius : '10px',
    padding : '20px'
   }
   
   const [user, setUser] = useState(0)
   
    return (
        <div style={userStyle}>
            <h3>User:</h3>
        </div>
    )
}