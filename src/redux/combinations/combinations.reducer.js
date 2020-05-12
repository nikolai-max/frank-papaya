import { addPressedKey } from './combinations.utils'

const INITIAL_STATE = {
    pressedKeys: [],
    propmt: ''
}

const combinationsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PRESSEDKEYS':
            return {
                ...state,
                combinations: addPressedKey(state.pressedKeys, action.payload)
            }
        case 'PROMPT':
            return {
                ...state,
                propmt: action.payload
            }

        default: 
            return state
    }
}

export default combinationsReducer