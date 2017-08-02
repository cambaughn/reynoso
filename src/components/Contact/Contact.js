/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SocialLinks from '../SocialLinks/SocialLinks';

const Contact = () => {
  return (
    <div style={styles.container}>

      <h2 style={styles.linkHeader}>Follow Me</h2>
      <SocialLinks />

    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // LINKS --------------------------

  linkHeader: {
    marginBottom: 10,
  },

  linkGroup: {
    width: 200,

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

export default Contact;
