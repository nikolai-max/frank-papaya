import React, {useEffect, useRef} from 'react'

import { connect } from 'react-redux'

import { setCurrentScore } from '../../redux/score/score.actions'
import { pressedKeys } from '../../redux/combinations/combinations.actions'

import './key.style.scss'

const Key = (props) => {
    const audioRef = useRef();
    const keyRef = useRef();
    
    const scoreCombinations = {
        combinations: [{ comb: ['s','a','a'], points: 20, prompt: 'Sweet ass combo'}, { comb: ['s','s','s'], points: 50, prompt: 'Genious strike'}, { comb: ['d','a','a'], points: 150, prompt: 'Keyboard banana!'}, { comb: ['s','f','f'], points: 200, prompt: 'That´s the Frank tone'}, { comb: ['f','s','a'], points: 225, prompt: 'Sing "Frank-Papaya"'}, { comb: ['h','f','a'], points: 330, prompt: 'This is it'}, { comb: ['j','j','h'], points: 450, prompt: 'Pinapple!!'}, { comb: ['l','k','s'], points: 750, prompt: 'Baywatch-banana'}, { comb: ['s','l','k'], points: 1000, prompt: 'Beach combo, wild!'}],
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
                console.log(combination.prompt);
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
    pressedKeys: (keys) => dispatch(pressedKeys(keys))
})

const mapStateToProps = state => ({
    combinations: state.keys.pressedKeys
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Key);