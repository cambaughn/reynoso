/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import colors from '../../util/colors';

class NavLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    }
  }

  render() {
    return (
      <Link
        to={this.props.to}
        style={this.state.hover ? {...styles.link, ...styles.hover, ...this.props.style} : {...styles.link, ...this.props.style}}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <p>
          {this.props.text}
        </p>
      </Link>
    )
  }
}

const styles = {
  container: {

  },

  link: {
    marginLeft: 40,

    color: 'black',
    textDecoration: 'none',

    fontSize: 15,
  },

  hover: {
    color: colors.blue,
  }
}

export default NavLink;
