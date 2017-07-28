/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div style={styles.container}>
      <div>
        <Link to={'/'} style={styles.brand}>
          <h1>
            Alejandra Reynoso
          </h1>
        </Link>
      </div>

      <div style={styles.links}>
        <Link to={'/'} style={styles.link}>
          <p>Home</p>
        </Link>

        <Link to={'/resume'} style={styles.link}>
          <p>Resume & Headshots</p>
        </Link>
      </div>

    </div>
  )
}


const styles = {
  container: {
    width: 'inherit',
    height: 60,

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

export default NavBar;
