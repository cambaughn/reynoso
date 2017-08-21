
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const SideNav = ({ visible }) => {
  console.log(visible)
  return (
    <div style={visible ? {...styles.container, ...styles.visible} : styles.container}>
      <div style={styles.links}>

        <Link to={'/'} style={styles.link}>
          <p>Home</p>
        </Link>
        <Link to={'/about'} style={styles.link}>
          <p>About</p>
        </Link>
        <Link to={'/reels'} style={styles.link}>
          <p>Reels</p>
        </Link>
        <Link to={'/resume'} style={styles.link}>
          <p>Resume & Headshots</p>
        </Link>
        <Link to={'/contact'} style={styles.link}>
          <p>Contact</p>
        </Link>

      </div>
    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {
    position: 'absolute',
    top: 0,
    left: window.innerWidth,

    width: 200,
    height: window.innerHeight,

    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    transition: 'left 0.5s',
  },

  visible: {
    left: window.innerWidth - 200,
  },

  // CONTAINER ---------------------
  links: {

  },

  link: {
    textDecoration: 'none',
    color: 'black',
  },
}

export default SideNav;
