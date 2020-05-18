import { CURRENT_TIME } from './timerService'

const initial_state = {
    currentTime: 5
}

const timeReducer = (state = initial_state, action) => {
    switch(action.type) {
        case CURRENT_TIME:
            const newTime = state.currentTime -1;
        return {
            ...state,
            currentTime: newTime
        }
        default: 
            return state
    }
}

export default timeReducer