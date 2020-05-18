import { decreaseTimer } from './timerService'

export const setCurrentTime = () => {
    return (dispatch, getState)=> {
        let intervalId
        // getState().time.currentTime is num
        intervalId = setInterval(()=>{
                decreaseTimer(dispatch)
                if(getState().time.currentTime <= 0) {
                    clearInterval(intervalId)
                }
            }, 1000) 
    }
}