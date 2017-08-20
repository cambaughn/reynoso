
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';


class ShowCardItem extends Component {
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
        <a
          href={this.props.to}
          target='_blank'
          rel='noopener noreferrer'
          style={this.state.hover ? {...styles.container, ...styles.hover} : styles.container}
        >
          <img src={this.props.imageSource} alt={this.props.alt} style={styles.image} />
        </a>
    )
  }
}

const styles = {
  // CONTAINER ---------------------

  container: {
    width: 250,
    height: 140,

    backgroundColor: 'white',

    overflow: 'hidden',

    transition: 'width 0.3s, height 0.3s',
  },

  hover: {
    width: 275,
    height: 154,
  },

  // IMAGE -------------------------

  image: {
    width: '100%',
  },


}

export default ShowCardItem;
