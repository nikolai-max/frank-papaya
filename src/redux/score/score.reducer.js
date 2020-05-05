const INITIAL_STATE = {
    currentScore: 0
}

const scoreReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_SCORE':
            return {
                ...state,
                currentScore: action.payload
            }

        default: 
            return state
    }
}

export default scoreReducer