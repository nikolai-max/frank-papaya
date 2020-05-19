import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import scorePage from './pages/scorepage'
import landingPage from './pages/landingpage'

function App() {
  return (
    <div>
        <Route path='/' exact component={landingPage} />
        <Route path='/score' exact component={scorePage}/>
    </div>
  );
}

export default (App);
