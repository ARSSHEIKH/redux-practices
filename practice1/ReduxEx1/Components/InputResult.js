import React from 'react';
import {useSelector} from 'react-redux';


export default function InputResult(){
    const user = useSelector((userState)=>userState)
    return(
        <div>
            
        <p>Login as : {user.LoginReducer.user}</p>
        <p>Signup as : {user.SignUpReducer.user}</p>
        </div>
    )
}