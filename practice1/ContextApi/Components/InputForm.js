import React, { useState } from 'react';
import UserContextProvider from "../Contexts/UserContext";

export default function InputForm() {
    let username = "", password = "";
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const usernameHandler = (e) => {
        username = e.target.value
    }
    const passHandler = (e) => {
        password = e.target.value
    }
    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                setUser({
                    username: username,
                    password: password

                })
            }
            }>
                <input type="text" placeholder="Username ... "
                    onChange={usernameHandler}
                /><br />
                <input type="Password" placeholder="Password ... "
                    onChange={passHandler}
                /><br />
                <input type="submit" placeholder="Register ... " />
            </form>
            <UserContextProvider user={user} /><br /><br /><br />
        </div>
    )
}