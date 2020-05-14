import { connect } from 'react-redux'

import { setCurrentScore } from '../redux/score/score.actions'
import { pressedKeys } from '../redux/combination/combinations.actions'
import Pappaya from '../media/sounds/pappaya.mp3'

export let init = (dispatch) => {
    const audio = new Audio(Pappaya)
    // Reset the state of score and keyPressed
    dispatch(setCurrentScore(0))
    console.log('init')
    // Initiate the timer state
    dispatch(pressedKeys([]))
    // Start playing the frank papaya tune
    audio.play()
    console.log(audio)
    // Start recording
}

const mapDispatchToProps = dispatch => ({
    setCurrentScore: (score) => dispatch(setCurrentScore(score))
})

export default connect(mapDispatchToProps)(init);