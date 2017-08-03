/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavBar/NavLink';

const Home = () => {
  return (
    <div style={styles.container}>
      <img src={require('../assets/photos/hero.jpg')} alt={'Alejandra portrait'} style={styles.hero}/>

      <div style={styles.aboutWrapper}>
        <h1 style={styles.aboutHeader}>Welcome</h1>
        <p style={styles.aboutText}>Alejandra is super awesome. Here are a few things about her.</p>

        <NavLink to={'/about'} text={'Read More'} style={styles.readMore} />
      </div>

    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {
    width: 'inherit',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // IMAGE -------------------------

  hero: {
    width: 500,
    height: 'auto',

  },

  // ABOUT -------------------------

  aboutWrapper: {
    marginTop: 30,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  aboutHeader: {
    fontSize: '2.5em',
    marginBottom: 10,
  },

  aboutText: {
    fontSize: '1.2em',
    marginBottom: 10,
  },

  readMore: {
    fontSize: '1.1em',
    margin: 0,
  },

}

export default Home;
