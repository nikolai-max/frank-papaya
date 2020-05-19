import { CURRENT_TIME } from './timerService'

const initial_state = {
    currentTime: 5,
    intervalID: null
}

const timeReducer = (state = initial_state, action) => {
    switch(action.type) {
        case "RESTART_TIME":
            return initial_state
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