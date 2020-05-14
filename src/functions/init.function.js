import { connect } from 'react-redux'

import { setCurrentScore } from '../redux/score/score.utils'


export let init = (props) => {
    // Reset the state of score and keyPressed
    console.log('Im in')
    setCurrentScore(0)

    // Initiate the timer state
    // Start recording
    // Start playing the frank papaya tune
}

const mapDispatchToProps = dispatch => ({
    setCurrentScore: (score) => dispatch(setCurrentScore(score))
})

export default connect(mapDispatchToProps)(init);