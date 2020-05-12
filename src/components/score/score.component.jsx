import React from 'react'

import { connect } from 'react-redux'
import CountUp from 'react-countup';

import './score.style.scss'


const Score = ({currentScore, currentTime}) => (

<div className='score'>
    <h3>{currentTime} seconds</h3>
    <h2><CountUp 
    preserveValue={true}
    end={currentScore}
     /></h2>
    <h3>Score</h3>
</div>
)

const mapStateToProps = state => ({
    currentScore: state.score.currentScore,
    currentTime: state.time.currentTime
})

export default connect(mapStateToProps)(Score) 