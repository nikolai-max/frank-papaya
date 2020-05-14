import React from 'react'

import { Link } from 'react-router-dom'
import { FaRedo, FaMedal } from 'react-icons/fa';

import { useDispatch } from 'react-redux'

import { init } from '../../functions/init.function'
import './dashboard.style.scss'

const Dashboard = () => {
  const dispatch = useDispatch();

  return(
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <h3 className="game-icons" onClick={() => init(dispatch)}><FaRedo/> Restart game</h3>
        <h3 className="game-icons"><Link to="/score"><FaMedal/> Highscores</Link></h3>
      </div>
    </div> 
  )
}
  
export default Dashboard