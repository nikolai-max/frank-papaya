import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import scorePage from './pages/scorepage'
import landingPage from './pages/landingpage'
import { setCurrentScore } from './redux/score/score.actions'


function App() {
  return (
    <div className="App">
        <Route path='/' exact component={landingPage} />
        <Route path='/score' exact component={scorePage}/>
    </div>
        );
}

const mapDispatchToProps = dispatch => ({
  setCurrentScore: score => dispatch(setCurrentScore(score))
})

export default connect(null, mapDispatchToProps)(App);
