// import React from 'react';
import React, {Component} from "react"
import {UserContext} from "../Contexts/UserContext";

// export function InputDisplayFunc() {
//     const contextType = UserContext;
//     console.log(contextType)

//     return (
//         <div>
//         </div>
//     )
// }
// export function SignupDisplay(props) {
//     return (
//         <div>
//             <p>Signup as : {props.user.username}</p>
//         </div>
//     )
// }



export class InputDisplay extends Component{
    static contextType = UserContext;
    render(){
        console.log(this.context)
        return(
            <div className="book-list">
                <h1>Input Display</h1>
            </div>
        )
    }
}