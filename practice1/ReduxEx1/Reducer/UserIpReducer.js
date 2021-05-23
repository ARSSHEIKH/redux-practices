import { userIp } from "../Action";

const ipInitialState={
    ip:"",
}
export function UserIpReducer(state=ipInitialState, action){
    console.log(action)
    switch (action.type) {
        case userIp:
            return{
                ...state,
                ip: action.payload.username
            }
        default:
            return state
    }
}