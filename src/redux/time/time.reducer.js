const INITIAL_STATE = {
    currentTime: 30
}

const timeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CURRENT_TIME':
            return {
                ...state,
                currentTime: action.payload
            }
        default: 
            return state
    }
}

export default timeReducer