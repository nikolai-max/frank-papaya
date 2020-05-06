import React, {useEffect, useRef} from 'react'

import { connect } from 'react-redux'

import { setCurrentScore } from '../../redux/score/score.actions'
import './key.style.scss'

const Key = (props) => {
    const audioRef = useRef();
    const keyRef = useRef();
    const pressed = [];
    const scoreCombinations = {
        combinations: [{ comb: 'aas', points: 20, prompt: 'Sweet ass combo'}, { comb: 'sa', points: 50, prompt: 'Genious strike'}, { comb: 'd', points: 150, prompt: 'Keyboard banana!'}, { comb: 'f', points: 200, prompt: 'That´s the Frank tone'}, { comb: 'g', points: 225, prompt: 'Sing "Frank-Papaya"'}, { comb: 'h', points: 330, prompt: 'This is it'}, { comb: 'j', points: 450, prompt: 'Pinapple!!'}, { comb: 'k', points: 750, prompt: 'Baywatch-banana'}, { comb: 'l', points: 1000, prompt: 'Beach combo, wild!'}],
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
        pressed.push(e.key);
        console.log(pressed)

        scoreCombinations.combinations.map((combination) => {
            if (pressed.join('').includes(combination.comb)) {
                console.log(combination.prompt);
                props.setCurrentScore(combination.points)
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
    setCurrentScore: (score) => dispatch(setCurrentScore(score))
})
  
export default connect(
    null,
    mapDispatchToProps
)(Key);
  