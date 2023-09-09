import { useState } from "react"

export default function Counter (){
    // const abc = useState(0)
    // console.log(abc)
    // const [count, setCount] = useState(0)
    //  count holo initial value 
    // useState holo inital valer man
    // setcount holo funtion
    
    const [count, setCount] = useState(0)
   
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }

return (
    <div style={{border: '2px solid red'}}>
        <h3>counter:{count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
    </div>
)
}