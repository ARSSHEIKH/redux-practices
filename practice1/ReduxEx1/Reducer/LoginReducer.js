import { login } from "../Action";

const loginInitialState={
    user:"",
}
export function LoginReducer(state=loginInitialState, action){
    console.log(action)
    switch (action.type) {
        case login:
            return{
                ...state,
                user: action.payload.username
            }
        default:
            return state
    }
}