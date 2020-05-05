import React, {Component} from 'react'
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
    items: [{ key: 'a', sound: 'bear', src: Bear}, { key: 's', sound: 'boom', src: Boom}, { key: 'd', sound: 'comet', src: Comet}, { key: 'f', sound: 'fart', src: Fart}, { key: 'g', sound: 'kick', src: Kick}, { key: 'h', sound: 'phone', src: Phone}, { key: 'j', sound: 'Power', src: Power}, { key: 'k', sound: 'Ride', src: Ride}, { key: 'l', sound: 'sight', src: Sight}],
    }
    
    render() {
        const {items} = this.state
        return(
            <div className="keys">
                {
                    items.map((item, index) => {
                        return <Key
                            key={item.key}
                            char={item.key}
                            {...item}
                         />
                    })
                }                    
            </div>
        )
    }
}



export default Keys