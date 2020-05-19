import React from 'react'

import { connect } from 'react-redux'

const Timers = ({currentTime}) => {
    
return (
    <div>
        <h3 style={{margin: '65px 0 0 0'}}>{currentTime} seconds</h3>
    </div>
    )
}

const mapStateToProps = state => ({
    currentTime: state.time.currentTime,
})

export default connect(
    mapStateToProps
)(Timers) 