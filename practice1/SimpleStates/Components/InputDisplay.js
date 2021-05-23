import React from 'react';

export function LoginDisplay(props) {
    return (
        <div>
            <p>Login as : {props.user.username}</p>
        </div>
    )
}
export function SignupDisplay(props) {
    return (
        <div>
            <p>Signup as : {props.user.username}</p>
        </div>
    )
}