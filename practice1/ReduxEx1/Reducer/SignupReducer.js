import { signup } from "../Action";

const signupInitialState={
    user:"",
}
export function SignUpReducer(state=signupInitialState, action){
    console.log(action)
    switch (action.type) {
        case signup:
            return{
                ...state,
                user: action.payload.username
            }
        default:
            return state
    }
}