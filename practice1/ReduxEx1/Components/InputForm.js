import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {increamentAction, decreamentAction} from '../Action/Action';

export default function InputForm() {
    const dispatch = useDispatch()
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    })
    const usernameHandler = (e) => {
        setUserLogin({ username: e.target.value, password: userLogin.password })
    }
    const passHandler = (e) => {
        setUserLogin({ password: e.target.value, username: userLogin.username })
    }
    return (
        <div>
        <h2>Login Form</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                    type: "LOGIN",
                    payload: userLogin
                })
            }
            }>
                <input type="text" placeholder="Username ... "
                    onChange={usernameHandler}
                /><br />
                <input type="Password" placeholder="Password ... "
                    onChange={passHandler}
                /><br />
                <input type="submit" placeholder="Submit ... " />
            </form>
        </div>
    )
}