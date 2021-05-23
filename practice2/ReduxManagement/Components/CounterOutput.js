import React from 'react';
import {useSelector} from 'react-redux';

//#region PropState
// export default function CounterOutput(props){
//     return(
//         <>Counter Value: {props.counter}</>
//     )
// }
//#endregion

export default function CounterOutput(){
    const counter = useSelector((counterState)=>counterState.counter)
    return(
        <>Counter Value: {counter}</>
    )
}