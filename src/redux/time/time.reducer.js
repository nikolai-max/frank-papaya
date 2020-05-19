import { CURRENT_TIME } from './timerService'

const initial_state = {
    currentTime: 5,
    intervalID: null
}

const timeReducer = (state = initial_state, action) => {
    console.log('a string', action)
    switch(action.type) {
        case "RESTART_TIME":
            return {...state, currentTime: 5}
        case "SET_INTERVAL_ID":
            return {...state, intervalID: action.intervalID}
        case CURRENT_TIME:
            const newTime = state.currentTime - 1;
            return {
                ...state,
                currentTime: newTime
            }
            default: 
            return state
        }
    }

export default timeReducer