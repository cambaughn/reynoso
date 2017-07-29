/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home';
import About from './About';


class App extends Component {
  render() {
    return (
      <Router>
        <div style={styles.container}>
          <NavBar />
          
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/About'} component={About} />
          </Switch>

          <Footer />

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
