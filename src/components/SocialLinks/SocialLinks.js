/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SocialLinks extends Component {

  render() {
    return (
      <div style={{...styles.container, ...this.props.containerStyle}}>
        <a href='https://www.instagram.com/alereyn0s0/' target='_blank' rel='noopener noreferrer' style={{...styles.link, ...this.props.linkStyle}}>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href='https://twitter.com/AleReyn0s0' target='_blank' rel='noopener noreferrer' style={{...styles.link, ...this.props.linkStyle}}>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href='https://www.facebook.com/AleReyn0s0/' target='_blank' rel='noopener noreferrer' style={{...styles.link, ...this.props.linkStyle}}>
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
      </div>
    )
  }
}

const styles = {
  // CONTAINER ---------------------

  container: {
    width: 200,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  // LINKS -------------------------

  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: 40,
  },
}

export default SocialLinks;
