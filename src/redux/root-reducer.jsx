import {combineReducers} from 'redux'

import scoreReducer from './score/score.reducer'
import combinationsReducer from './combinations/combinations.reducer'

export default combineReducers({
    score: scoreReducer,
    keys: combinationsReducer
})