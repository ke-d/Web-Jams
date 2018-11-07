import React, { Component } from 'react';
// import './App.css';
import csulb from './Images/csulb.jpeg'
import NavBar from './Components/NavBar';
import Thread from './Components/Thread';
import {Grid, Row, Col} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <MyJumboComponent /> */}
        <Grid>
            <Row>
                {/* <Col xs={12}  md={4}>
                  <img src={csulb}/>
                </Col>
                <Col xs={12}  md={4}>
                  <img src={csulb}/>
                </Col>
                <Col xs={12}  md={4}>
                  <img src={csulb}/>
                </Col> */}
                <Thread />
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
