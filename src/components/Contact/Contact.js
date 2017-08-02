/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div style={styles.container}>

      <h2 style={styles.linkHeader}>Follow Me</h2>
      <div style={styles.linkGroup}>
        <a href='https://www.instagram.com/alereyn0s0/' target='_blank' rel='noopener noreferrer' style={styles.link}>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href='https://twitter.com/AleReyn0s0' target='_blank' rel='noopener noreferrer' style={styles.link}>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href='https://www.facebook.com/AleReyn0s0/' target='_blank' rel='noopener noreferrer' style={styles.link}>
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
      </div>

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
