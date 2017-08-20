
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Responsive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desktopWidth: true,
    }

    this.handleResize = this.handleResize.bind(this);
  }

  getChildContext() {
    return {desktopWidth: this.state.desktopWidth};
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if(window.innerWidth < 1000) {
        this.setState({desktopWidth: false});
    } else {
        this.setState({desktopWidth: true});
    }
  }

  render() {
    let styles = {};

    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

Responsive.childContextTypes = {
  desktopWidth: PropTypes.bool
};

const styles = {
  // CONTAINER ---------------------

  container: {

  },
}

export default Responsive;
