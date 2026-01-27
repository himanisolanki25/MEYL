import { useState } from "react";

const User = ({name, location}) => {
    const [count]=useState(0);
    const [count2]=useState(2);
    return (
        <div className="user-card">
            <h3>Count: {count}</h3>
            <h3>Count: {count2}</h3>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h3>Contact: @himanisolanki25</h3>
        </div>
    )
}

export default User;