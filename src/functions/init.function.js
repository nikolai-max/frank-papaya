import { connect } from 'react-redux'

import { setCurrentScore } from '../redux/score/score.actions'
import { pressedKeys } from '../redux/combination/combinations.actions'
import { setCurrentTime } from '../redux/time/time.actions'
import { restartTime } from '../redux/time/time.actions'

import Pappaya from '../media/sounds/frank-papaya.wav'

const audio = new Audio(Pappaya)
export let init = (dispatch) => {
    // Reset the state of score and keyPressed
    dispatch(setCurrentScore(0))
    console.log('init')
    dispatch(pressedKeys([]))
    // Start playing the frank papaya tune
    if (audio.play()) {
        audio.pause()
        audio.currentTime = 0
    }
    audio.play()

    //Reset the timer
    dispatch(restartTime())

    //Initiate the timer
    dispatch(setCurrentTime())
}

const mapDispatchToProps = dispatch => ({
    setCurrentScore: (score) => dispatch(setCurrentScore(score)),
    pressedKeys: (keys) => dispatch(pressedKeys(keys)),
    setCurrentTime: (time) => dispatch(setCurrentTime(time))
})

export default connect(mapDispatchToProps)(init);