/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SocialLinks extends Component {

  render() {
    return (
      <div style={{...styles.container, ...this.props.linkGroupStyle}}>

        <h2 style={styles.linkHeader}>{this.props.headerText}</h2>

        <div style={styles.linkWrapper}>
          <a href='https://www.instagram.com/alereyn0s0/' target='_blank' rel='noopener noreferrer' style={{...styles.link, ...this.props.linkStyle}}>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href='https://twitter.com/AleReyn0s0' target='_blank' rel='noopener noreferrer' style={{...styles.link, ...this.props.linkStyle}}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href='https://www.facebook.com/AleReyn0s0/' target='_blank' rel='noopener noreferrer' style={{...styles.link, ...this.props.linkStyle}}>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <a href='http://www.imdb.com/name/nm2274825/' target='_blank' rel='noopener noreferrer' style={{...styles.link, ...this.props.linkStyle}}>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
        </div>

      </div>
    )
  }
}

const styles = {
  // CONTAINER ---------------------

  container: {
    width: 250,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // HEADER ---------------------

  linkHeader: {
    marginBottom: 10,
  },

  // LINKS -------------------------

  linkWrapper: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: 40,
  },
}

export default SocialLinks;
