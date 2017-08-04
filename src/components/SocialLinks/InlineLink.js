
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';

import colors from '../../util/colors';

class InlineLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    }

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <span style={styles.container}>
        <a
          href={this.props.to}
          target='_blank'
          rel='noopener noreferrer'
          style={this.state.hover ? {...styles.inlineLink, ...this.props.hoverStyle} : styles.inlineLink}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          {this.props.text}
        </a>
      </span>
    )
  }
}

const styles = {
  // CONTAINER ---------------------

  container: {

  },

  // LINK --------------------------

  inlineLink: {
    textDecoration: 'none',
    fontWeight: '900',
    color: 'black',
  },

}

export default InlineLink;
