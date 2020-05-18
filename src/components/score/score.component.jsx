import React from 'react'

import { connect } from 'react-redux'

import AntModal2 from '../modal/modal2.component'
import Timers from './timer/timer.component'
import Points from './points/points.component'
import Message from './message/message.component'

const Score = ({currentTime}) => {
    
return (
    <div>
        <Timers></Timers>
        <Points></Points>
        <Message></Message>
        {currentTime === 0 && <AntModal2></AntModal2>}
    </div>
    )
}

const mapStateToProps = state => ({   
    currentTime: state.time.currentTime,
})

export default connect(
    mapStateToProps, 
)(Score) 