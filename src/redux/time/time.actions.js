import { decreaseTimer } from './timerService'

export const setCurrentTime = () => {
    return (dispatch, getState)=> {
        let interval
        // getState().time.currentTime is num
        interval = setInterval(()=>{
            decreaseTimer(dispatch)
                if(getState().time.currentTime <= 0) {
                    clearInterval(interval)
                }
            }, 1000) 
    }
}

export const restartTime = () => ({
    type: 'RESTART_TIME'
})