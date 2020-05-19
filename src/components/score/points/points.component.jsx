import React from 'react'

import { connect } from 'react-redux'
import CountUp from 'react-countup';
import './points.styles.scss'

const Points = ({currentScore}) => {
    
return (
    <div>
        <h2 style={{margin: 0}}><CountUp 
        preserveValue={true}
        end={currentScore}
        /></h2>
        <h3 style={{marginBottom: '50px'}}>score</h3>
    </div>
    )
}

const mapStateToProps = state => ({
    currentScore: state.score.currentScore,
})

export default connect(
    mapStateToProps, 
)(Points) 