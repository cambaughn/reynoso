/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SocialLinks from '../SocialLinks/SocialLinks';
import colors from '../../util/colors';

const Footer = () => {
  return (
    <div style={styles.container}>
      <SocialLinks linkGroupStyle={styles.linkGroupStyle} linkStyle={styles.linkStyle} />
    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {
    backgroundColor: '#2B2B2B',

    width: 'inherit',
    height: 100,

    marginTop: 100,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // LINKS ---------------------

  linkGroupStyle: {
    width: 300,
  },

  linkStyle: {
    color: 'white',
    fontSize: 25,
  },
}

export default Footer;
