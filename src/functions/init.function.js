import { connect } from 'react-redux'

import { setCurrentScore } from '../redux/score/score.actions'

export let init = (dispatch) => {
    // Reset the state of score and keyPressed
    dispatch(setCurrentScore(0))
    // Initiate the timer state
    // Start recording
    // Start playing the frank papaya tune
}

const mapDispatchToProps = dispatch => ({
    setCurrentScore: (score) => dispatch(setCurrentScore(score))
})

export default connect(mapDispatchToProps)(init);