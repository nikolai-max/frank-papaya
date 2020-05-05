import React, {useEffect, useRef} from 'react'
import './key.style.scss'

const Key = props => {
    const audioRef = useRef();
    const keyRef = useRef();

    function onKeyDown(e){
        if (e.key !== props.char) {
            return;
        }
        audioRef.current.play();
        keyRef.current.classList.add('playing')
    }

    function onTransitionEnd(e){
        keyRef.current.classList.remove('playing')
    }

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown, false);
    }, []);

    return (
        <div className="key" ref={keyRef} onTransitionEnd={onTransitionEnd}>
            <kbd>{props.char.toUpperCase()}</kbd>
            <span className="sound">{props.name}</span>
            <audio ref={audioRef} src={props.src}></audio>
        </div>
    );
  };
  
export default Key;
  