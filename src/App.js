import React from 'react';
import './App.css';

import Dashboard from './components/dashboard/dashboard.component'
import Score from './components/score/score.component'
import Keys from './components/keys/keys.component'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Frank Papaya</h1>
      </div>
      <Dashboard></Dashboard>
      <Score></Score>
      <Keys></Keys>
    </div>
  );
}

export default App;
