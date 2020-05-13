const INITIAL_STATE = {
    currentMessage: null
}

const messageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CURRENT_MESSAGE':
            return {
                ...state,
                currentMessage: action.payload
            }

        default: 
            return state
    }
}

export default messageReducer