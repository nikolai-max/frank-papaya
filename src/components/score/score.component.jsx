import React, {useRef, useEffect} from 'react'

import { connect } from 'react-redux'
import CountUp from 'react-countup';

import { setMessage } from '../../redux/message/message.actions'
import './score.style.scss'

const Score = ({currentScore, currentTime, currentMessage, setMessage}) => {
    const messageRef = useRef();
    
    function onAnimationEnd(){
        // change the redux state to 'null'
        console.log('the end')
        setMessage(null)
        messageRef.current.classList.remove('score-prompt')
    }

    useEffect(() => {
        if(currentMessage) {
            messageRef.current.classList.add('score-prompt')
        }
    });
    
return (
    <div className='score'>
        <h3>{currentTime} seconds</h3>
        <h2><CountUp 
        preserveValue={true}
        end={currentScore}
        /></h2>
        <h3>score</h3>
        <p ref={messageRef} onAnimationEnd={onAnimationEnd}>{currentMessage}</p>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setMessage: (sentence) => dispatch(setMessage(sentence))
})

const mapStateToProps = state => ({
    currentScore: state.score.currentScore,
    currentTime: state.time.currentTime,
    currentMessage: state.message.currentMessage
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Score) 