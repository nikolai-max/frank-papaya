import React from 'react'

import { connect } from 'react-redux'
import CountUp from 'react-countup';

const Points = ({currentScore}) => {
    
return (
    <div>
        <h2><CountUp 
        preserveValue={true}
        end={currentScore}
        /></h2>
        <h3>score</h3>
    </div>
    )
}

const mapStateToProps = state => ({
    currentScore: state.score.currentScore,
})

export default connect(
    mapStateToProps, 
)(Points) 