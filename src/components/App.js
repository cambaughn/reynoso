/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import NavBar from './NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={styles.container}>
          <NavBar />
        </div>

      </Router>
    );
  }
}

const styles = {
  container: {
    // backgroundColor: '#FAFAFA',
  },
}

export default App;
