import React from 'react'

import { connect } from 'react-redux'
import CountUp from 'react-countup';

import './score.style.scss'


const Score = ({currentScore}) => (

<div className='score'>
    <h2 class="scoreColor"><CountUp 
    preserveValue={true}
    end={currentScore}
     /></h2>
    <h3 class="scoreColor">Score</h3>
</div>
)

const mapStateToProps = state => ({
    currentScore: state.score.currentScore
})

export default connect(mapStateToProps)(Score) 