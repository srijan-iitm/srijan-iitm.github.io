import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Srijan from './components/Srijan';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Srijan}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
