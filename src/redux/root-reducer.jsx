import {combineReducers} from 'redux'

import scoreReducer from './score/score.reducer'
import combinationsReducer from './combination/combinations.reducer'
import timeReducer from './time/time.reducer'
import messageReducer from './message/message.reducer'

export default combineReducers({
    score: scoreReducer,
    keys: combinationsReducer,
    time: timeReducer,
    message: messageReducer
})