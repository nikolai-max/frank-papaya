import React, {useRef, useEffect} from 'react'

import { connect } from 'react-redux'

import { setMessage } from '../../../redux/message/message.actions'
import './message.styles.scss'


const Score = ({currentMessage, setMessage}) => {
    const messageRef = useRef();
    
    function onAnimationEnd(){
        // change the redux state to 'null'
        setMessage(null)
        messageRef.current.classList.remove('score-prompt')
    }

    useEffect(() => {
        if(currentMessage) {
            messageRef.current.classList.add('score-prompt')
        }
    });
    
return (
    <div>
        <p ref={messageRef} onAnimationEnd={onAnimationEnd}>{currentMessage}</p>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setMessage: (sentence) => dispatch(setMessage(sentence))
})

const mapStateToProps = state => ({
    currentMessage: state.message.currentMessage
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Score) 