import React from 'react'
import { Link } from 'react-router-dom'

import { FaRedo, FaMicrophone, FaMedal } from 'react-icons/fa';

import './dashboard.style.scss'

const Dashboard = () => (
    <div className='dashboard'>
        <h3 className="game-icons"><FaRedo/> Play</h3>
        <h3 className="game-icons"><Link to="/score"><FaMedal/> Highscores</Link></h3>
        <h3 className="game-icons"><FaMicrophone/> Record</h3>
      </div> 
)
  
  export default Dashboard