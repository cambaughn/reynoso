/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';
import colors from '../../util/colors';

const NavBar = () => {

  let desktopWidth = window.innerWidth > 700;

  let styles = desktopWidth ? desktopStyles() : {...desktopStyles(), ...mobileStyles()};

  if (desktopWidth) {
    return (
      <div style={styles.container}>
        <div>
          <Link to={'/'} style={styles.brand}>
            {/* <img src={require('../../assets/photos/reynoso-wordmark.png')} alt={'Ale'} style={styles.brandImage}/> */}
            <h1>AR</h1>
          </Link>
        </div>

        <div style={styles.links}>

          <NavLink to={'/'} text={'Home'} />
          <NavLink to={'/about'} text={'About'} />
          <NavLink to={'/reels'} text={'Reels'} />
          <NavLink to={'/resume'} text={'Resume & Headshots'} />
          <NavLink to={'/contact'} text={'Contact'} />

        </div>
      </div>
    )
  } else {
    return (
      <div style={styles.container}>
        <div>
          <Link to={'/'} style={styles.brand}>
            {/* <img src={require('../../assets/photos/reynoso-wordmark.png')} alt={'Ale'} style={styles.brandImage}/> */}
            <h1>AR</h1>
          </Link>
        </div>

        {/* <div style={styles.links}>

          <NavLink to={'/'} text={'Home'} />
          <NavLink to={'/about'} text={'About'} />
          <NavLink to={'/reels'} text={'Reels'} />
          <NavLink to={'/resume'} text={'Resume & Headshots'} />
          <NavLink to={'/contact'} text={'Contact'} />

        </div> */}
      </div>
    )
  }
}


const desktopStyles = () => {
  return  {
    container: {
      width: 'inherit',
      height: 80,

      paddingLeft: 60,
      paddingRight: 60,

      backgroundColor: 'transparent',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    // BRAND -------------------------------------

    brand: {
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
    },

    brandImage: {
      height: 35,
    },

    // RIGHT-SIDE LINKS --------------------------

    links: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    link: {
      marginLeft: 40,

      color: 'black',
      textDecoration: 'none',
    }
  }
}

const mobileStyles = () => {
  return  {
    container: {
      width: 'inherit',
      height: 80,

      paddingLeft: 60,
      paddingRight: 60,

      backgroundColor: 'transparent',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    // BRAND -------------------------------------

    brand: {
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
    },

    brandImage: {
      height: 35,
    },

    // RIGHT-SIDE LINKS --------------------------

    links: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    link: {
      marginLeft: 40,

      color: 'black',
      textDecoration: 'none',
    }
  }
}



export default NavBar;
