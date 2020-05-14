import React, { useEffect, useRef } from 'react'

import { connect } from 'react-redux'

import { setCurrentScore } from '../../redux/score/score.actions'
import { pressedKeys } from '../../redux/combination/combinations.actions'
import { setMessage } from '../../redux/message/message.actions'

import './key.style.scss'

const Key = (props) => {
    const audioRef = useRef();
    const keyRef = useRef();
    
    const scoreCombinations = {
        combinations: [{ comb: ['s','a','a'], points: 20, message: 'Sweet ass combo'}, { comb: ['s','s','s'], points: 50, message: 'Genious strike'}, { comb: ['d','a','a'], points: 150, message: 'Keyboard banana!'}, { comb: ['s','f','f'], points: 200, message: 'That´s the Frank tone'}, { comb: ['f','s','a'], points: 225, message: 'Sing "Frank-Papaya"'}, { comb: ['h','f','a'], points: 330, message: 'This is it'}, { comb: ['j','j','h'], points: 450, message: 'Pinapple!!'}, { comb: ['l','k','s'], points: 750, message: 'Baywatch-banana'}, { comb: ['s','l','k'], points: 1000, message: 'Beach combo, wild!'}],
        }

    function onKeyDown(e){
        if (e.key !== props.char) {
            return;
        }
        audioRef.current.play();
        keyRef.current.classList.add('playing')
        audioRef.current.currentTime = 0;
        scoringPoints(e)
    }

    function scoringPoints(e) {
        props.pressedKeys(e.key);

        scoreCombinations.combinations.map(combination => {
            if (props.combinations.join(',') === combination.comb.join(',')) {
                props.setMessage(combination.message)
                props.setCurrentScore(combination.points)
                props.pressedKeys([])
            }
        })
    }

    function onTransitionEnd(){
        keyRef.current.classList.remove('playing')
    }

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown, false);
    });

    return (
        <div className="key" ref={keyRef} onTransitionEnd={onTransitionEnd}>
            <kbd>{props.char.toUpperCase()}</kbd>
            <span className="sound">{props.sound}</span>
            <audio ref={audioRef} src={props.src}></audio>
        </div>
    );
  };

const mapDispatchToProps = dispatch => ({
    setCurrentScore: (score) => dispatch(setCurrentScore(score)),
    pressedKeys: (keys) => dispatch(pressedKeys(keys)),
    setMessage: (sentence) => dispatch(setMessage(sentence))
})

const mapStateToProps = state => ({
    combinations: state.keys.pressedKeys
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Key);