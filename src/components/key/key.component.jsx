import React from 'react'
import './key.style.scss'

const Key = props => {
    window.addEventListener("keydown", e => {
        let audio = document.getElementById(e.key);
        if (!audio) return;
        const key = document.querySelector(`div[data-key="${e.key}"]`)
        
        console.log(audio);
        audio.play();
        audio.currentTime = 0;
        key.classList.add('playing')
      });
    
      
      function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing')
      }
      
      const keys = document.querySelectorAll('.key')
      keys.forEach(key => 
        key.addEventListener('transitionend', removeTransition));    

    return (
        <div data-key={props.id} className="key">
            <kbd>{props.id.toUpperCase()}</kbd>
            <span className="sound">{props.name}</span>
            <audio id={props.id} ref={props.ref} src={props.src}></audio>
        </div>
    );
  };
  
export default Key;
  