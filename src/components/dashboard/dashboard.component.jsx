import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setCurrentScore } from '../../redux/score/score.actions'

import { FaRedo, FaMedal } from 'react-icons/fa';
import {Button} from 'antd'

import './dashboard.style.scss'

const Dashboard = (props) => {
  function init() {
    console.log('hello')
    props.setCurrentScore(0)
  }

  return(
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <Button>This is the button</Button>
        <h3 className="game-icons" onClick={init}><FaRedo/> Restart game</h3>
        <h3 className="game-icons"><Link to="/score"><FaMedal/> Highscores</Link></h3>
      </div>
      <div>
      <h3 className="whiteColor">00:30</h3>
      </div>
      </div> 
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentScore: (score) => dispatch(setCurrentScore(score))
})
  
export default connect(null, mapDispatchToProps)(Dashboard)