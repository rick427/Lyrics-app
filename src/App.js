import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from './context';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

class App extends Component{
  render(){
    return (
      <Provider>
        <Router>
          <>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/lyrics/track/:id" component={Lyrics}/>
            </Switch>
          </div>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
