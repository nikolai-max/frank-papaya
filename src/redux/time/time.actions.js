import { decreaseTimer } from './timerService'

export const setCurrentTime = () => {
    return (dispatch, getState)=> {
        const {intervalID} = getState().time
        clearInterval(intervalID)
        let interval
        // getState().time.currentTime is num
        interval = setInterval(()=>{
            decreaseTimer(dispatch)
                if(getState().time.currentTime <= 0) {
                    clearInterval(interval)
                }
            }, 1000)
        dispatch({
            type: 'SET_INTERVAL_ID',
            intervalID: interval
        })
    }
}

export const restartTime = () => ({
    type: 'RESTART_TIME'
})