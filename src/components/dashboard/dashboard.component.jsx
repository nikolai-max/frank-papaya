import React from 'react'
import { Link } from 'react-router-dom'

import { FaRedo, FaMedal } from 'react-icons/fa';

import './dashboard.style.scss'

const Dashboard = () => {

  return(
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <h3 className="game-icons"><FaRedo/> Restart game</h3>
        <h3 className="game-icons"><Link to="/score"><FaMedal/> Highscores</Link></h3>
      </div>
    </div> 
  )
}
  
export default (Dashboard)