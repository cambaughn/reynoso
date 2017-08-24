
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import colors from '../../util/colors';

const SideNav = ({ visible, toggleSideNav }) => {
  let styles = mobileStyles();

  return (
    <div
      style={visible ? {...styles.container, ...styles.visible} : styles.container}
    >
      <div style={styles.exitArea} onMouseDown={toggleSideNav}></div>
      <div style={styles.tray}>
        <i
          className="fa fa-times"
          aria-hidden="true"
          style={styles.exit}
          onMouseDown={toggleSideNav}
        ></i>

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
          <Link to={'/news'} style={styles.link}>
            <p>News</p>
          </Link>
          <Link to={'/contact'} style={styles.link}>
            <p>Contact</p>
          </Link>

        </div>

      </div>
    </div>
  )
}


const mobileStyles = () => {
  return {
    // --------------------- CONTAINER

    container: {
      position: 'fixed',
      top: 0,
      left: window.innerWidth,

      width: window.innerWidth,
      height: window.innerHeight,

      backgroundColor: 'transparent',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',

      zIndex: 0,

      transition: 'left 0.5s',
    },

    visible: {
      left: 0,
    },

    // --------------------- TRAY

    tray: {
      width: 250,
      height: window.innerHeight,

      backgroundColor: 'white',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      zIndex: 1,
    },

    // --------------------- EXIT

    exitArea: {
      backgroundColor: 'transparent',
      height: window.innerHeight,
      width: window.innerWidth - 250,
    },

    exit: {
      position: 'absolute',
      top: 30,
      right: 30,

      // color: colors.blue,
      fontSize: 25,
    },

    // --------------------- LINKS
    links: {
      height: window.innerHeight - (window.innerHeight * 0.3),

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    link: {
      textDecoration: 'none',
      color: 'black',

      fontSize: 18,
    },
  }
}

export default SideNav;
