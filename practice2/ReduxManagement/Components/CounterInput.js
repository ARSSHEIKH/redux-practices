import React from 'react';
import {useDispatch} from 'react-redux';
import {increamentAction, decreamentAction} from '../Action/Action';

export default function CounterInput(){
    const dispatch = useDispatch()
    return(
        <>
            <button onClick={()=>dispatch({
                type: "INCREAMENT",
                payload: {value: 1}
            })}>+</button>
            <button onClick={()=>dispatch({
                type: "DECREAMENT",
                payload: {value: 1}
            })}>-</button>
        </>
    )
}