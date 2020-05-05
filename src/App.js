import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Student from './components/Student';
import Teacher from './components/Teacher';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/react-app/' exact component={Home} />
          <Route path='/react-app/student' component={Student} />
          <Route path='/react-app/teacher' component={Teacher} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
