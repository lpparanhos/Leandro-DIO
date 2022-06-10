import React from "react";

export default function UseStateObject() {
    const [user, setUser] = useState(
        {
            name: "Leandro",
            age: "27"
        }
    );

    return (
        <div>
            <h1>{user.name}</h1>