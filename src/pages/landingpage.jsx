import React from 'react'

import Dashboard from '../components/dashboard/dashboard.component'
import Score from '../components/score/score.component'
import Keys from '../components/keys/keys.component'
import './pages.style.scss'

function LandingPage() {
    return (
    <div className="landingpageContainer">
        <div >
            <h1 className='header'>Frank-Papaya</h1>
        </div>
        <Dashboard></Dashboard>
        <Score></Score>
        <Keys></Keys>
    </div>
    )
}

export default LandingPage
