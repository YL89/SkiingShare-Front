import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation';
import Home from './components/Home';
import { Col, Row } from 'react-bootstrap';
import SidePanel from './components/SidePanel'
import MainPanel from './components/MainPanel'


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';

class App extends React.Component {
  
  render() {
    return (
      <>
      <Row className="justify-content-center" noGutters>
        <Col xs={2}>
          <SidePanel/>
        </Col>
        <Col xs={8}>
          <MainPanel />
        </Col>
      </Row>
      <Footer/>
      </>
    )
  }
  ;
}

export default App;
