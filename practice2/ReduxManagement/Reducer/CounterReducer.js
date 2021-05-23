import { increament, decreament} from "../Action/Action";


const initialState={
    counter: 0,
}
export default function CounterReducer(state=initialState, action){
    switch (action.type) {
        case increament:
            return{
                ...state,
                counter: state.counter+action.payload.value
            }
        case decreament:
        return{
            ...state,
            counter: state.counter-action.payload.value
        }
        default:
            return state
    }
}
