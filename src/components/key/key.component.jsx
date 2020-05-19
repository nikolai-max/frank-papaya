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
        combinations: [{ comb: ['s','a','a'], points: 20, message: 'Sweet ass combo'}, { comb: ['s','s','s'], points: 50, message: 'Genious strike'}, { comb: ['d','a','a'], points: 150, message: 'Keyboard banana!'}, { comb: ['s','f','f'], points: 200, message: 'That´s the Frank tone'}, { comb: ['f','s','a'], points: 225, message: 'Sing "Frank-Papaya"'}, { comb: ['h','f','a'], points: 330, message: 'This is it'}, { comb: ['j','j','h'], points: 450, message: 'Pinapple!!'}, { comb: ['l','k','s'], points: 750, message: 'Baywatch-banana'}, { comb: ['s','l','k'], points: 1000, message: 'Beach combo, wild!'}, { comb: ['f','g','f'], points: 300, message: 'Babb and babes'}, { comb: ['g','j','g'], points: 400, message: 'You wanna know Frank?'}, { comb: ['a','k','k'], points: 250, message: 'Shark attach'}, { comb: ['j','l','d'], points: 350, message: 'German groove'}, { comb: ['g','h','d'], points: 670, message: 'Where are the party'}, { comb: ['h','g','f'], points: 300, message: 'Cuzins'}, { comb: ['f','f','f'], points: 200, message: 'Fart in the air'}, { comb: ['g','g','g'], points: 10, message: 'Kick slap'}, { comb: ['h','h','h'], points: 25, message: 'Pick up the phone'}, { comb: ['f','h','f'], points: 450, message: 'Nice, fart in the phone'}, { comb: ['l','l','g'], points: 500, message: 'Time to go home'}, { comb: ['d','d','d'], points: 35, message: 'Comet attach'}],
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