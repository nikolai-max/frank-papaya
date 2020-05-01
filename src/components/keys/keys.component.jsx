import React, { Component } from 'react'
import './keys.style.scss'
import Bear from '../../media/sounds/bear.wav'
import Boom from '../../media/sounds/boom.wav'
import Comet from '../../media/sounds/comet.wav'
import Fart from '../../media/sounds/fart.wav'
import Kick from '../../media/sounds/kick.wav'
import Phone from '../../media/sounds/phone.wav'
import Power from '../../media/sounds/power.wav'
import Ride from '../../media/sounds/ride.wav'
import Sight from '../../media/sounds/sight.wav'

import Key from '../key/key.component'

class Keys extends Component {
    state = {
        keyArray: ['a','s','d','f','g','h','j','k','l'],
        soundArray: ['bear', 'boom', 'comet', 'fart', 'kick', 'phone', 'power', 'ride', 'sight'],
        srcArray: [Bear, Boom, Comet, Fart, Kick, Phone, Power, Ride, Sight]
    }
    render() {
        return(
            <div className="keys">
                <Key
                    id={this.state.keyArray[0]}
                    name={this.state.soundArray[0]}
                    sound={this.state.soundArray[0]}
                    src={this.state.srcArray[0]}
                    ref={this.state.myRef}
                />
                <Key
                    id={this.state.keyArray[1]}
                    name={this.state.soundArray[1]}
                    sound={this.state.soundArray[1]}
                    src={this.state.srcArray[1]}
                    ref={this.state.myRef}
                />
                <Key
                    id={this.state.keyArray[2]}
                    name={this.state.soundArray[2]}
                    sound={this.state.soundArray[2]}
                    src={this.state.srcArray[2]}
                    ref={this.state.myRef}
                />
                <Key
                    id={this.state.keyArray[3]}
                    name={this.state.soundArray[3]}
                    sound={this.state.soundArray[3]}
                    src={this.state.srcArray[3]}
                    ref={this.state.myRef}
                />
                <Key
                    id={this.state.keyArray[4]}
                    name={this.state.soundArray[4]}
                    sound={this.state.soundArray[4]}
                    src={this.state.srcArray[4]}
                    ref={this.state.myRef}
                />
                <Key
                    id={this.state.keyArray[5]}
                    name={this.state.soundArray[5]}
                    sound={this.state.soundArray[5]}
                    src={this.state.srcArray[5]}
                    ref={this.state.myRef}
                />
                <Key
                    id={this.state.keyArray[6]}
                    name={this.state.soundArray[6]}
                    sound={this.state.soundArray[6]}
                    src={this.state.srcArray[6]}
                    ref={this.state.myRef}
                /> 
                <Key
                    id={this.state.keyArray[7]}
                    name={this.state.soundArray[7]}
                    sound={this.state.soundArray[7]}
                    src={this.state.srcArray[7]}
                    ref={this.state.myRef}
                /> 
                <Key
                    id={this.state.keyArray[8]}
                    name={this.state.soundArray[8]}
                    sound={this.state.soundArray[8]}
                    src={this.state.srcArray[8]}
                    ref={this.state.myRef}
                />           
            </div>
        )
    }
}



export default Keys