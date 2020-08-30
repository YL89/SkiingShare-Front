import React from 'react';

import Map from './components/Map';
import './App.css';
import Navigation from './components/Navigation';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Map></Map>
      </div>
    )
  }
  ;
}

export default App;
