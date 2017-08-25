
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';


class NewsLink extends Component {
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
          style={styles.link}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <h3
            style={this.state.hover ? {...styles.headline, color: this.props.color} : styles.headline}>
            {this.props.headline}
          </h3>
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

  link: {
    textDecoration: 'none',
  },

  headline: {
    marginBottom: 8,

    color: 'black',
    fontWeight: 'bold',
    fontSize: '1.5em',
  },

}

export default NewsLink;
