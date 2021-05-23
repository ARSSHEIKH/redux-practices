import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {increamentAction, decreamentAction} from '../Action/Action';

export default function SignUpForm() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })
    const usernameHandler = (e) => {
        setUser({ username: e.target.value, password: user.password, email: user.email })
    }
    const emailHandler = (e) => {
        setUser({ email: e.target.value, username: user.username, password: user.password })
    }
    const passHandler = (e) => {
        setUser({ password: e.target.value, username: user.username, email: user.email })
    }
    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                    type: "SIGNUP",
                    payload: user
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
        </div>
    )
}