import {combineReducers} from 'redux'

import scoreReducer from './score/score.reducer'

export default combineReducers({
    score: scoreReducer
})