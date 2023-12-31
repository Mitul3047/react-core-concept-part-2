import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(11)
    
    const handleAdd = () => {
    const newTeam = team + 2
        setTeam(newTeam)
    }


    const teamStyle = {
        border : '2px solid yellow',
        margin : '15px',
        padding : '15px',
        borderRadius : '15px'
    }

    return(
        <div style={teamStyle}>
            <h4>Players: {team}</h4>
            <button onClick={handleAdd}>Add</button>

        </div>
    )
}