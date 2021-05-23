import React, { useState } from 'react';
import { SignupDisplay } from "./InputDisplay";

export default function SignUpForm() {
    let username = "", email = "", password = "";
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const usernameHandler = (e) => {
        username = e.target.value
    }
    const emailHandler = (e) => {
        email = e.target.value
    }
    const passHandler = (e) => {
        password = e.target.value
    }
    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                setUser({
                    username: username,
                    email: email,
                    password: password

                })
            }
            }>
                <input type="text" placeholder="Username ... "
                    onChange={usernameHandler}
                /><br />
                <input type="text" placeholder="Email Address... "
                    onChange={emailHandler}
                /><br />
                <input type="Password" placeholder="Password ... "
                    onChange={passHandler}
                /><br />
                <input type="submit" placeholder="Register ... " />
            </form>
            <SignupDisplay user={user} /><br /><br /><br />
        </div>
    )
}