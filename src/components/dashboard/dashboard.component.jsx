import React from 'react'
import { Link } from 'react-router-dom'

import './dashboard.style.scss'

const Dashboard = () => (
    <div className='dashboard'>
        <h2>Play</h2>
        <h2><Link to="/score">Highscores</Link></h2>
        <h2>Record</h2>
      </div> 
)
  
  export default Dashboard