/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavBar/NavLink';
import ShowCards from './SocialLinks/ShowCards';
import colors from '../util/colors';

const Home = () => {
  return (
    <div style={styles.container}>
      <img src={require('../assets/photos/hero.jpg')} alt={'Alejandra portrait'} style={styles.hero}/>

      <div style={styles.aboutWrapper}>
        <h1 style={styles.aboutHeader}>Welcome</h1>
        <p style={styles.aboutText}>
          Alejandra is super awesome. Here are a few great things about her.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dictum odio. Donec arcu risus, hendrerit accumsan sem id, facilisis vehicula velit. Maecenas non arcu tincidunt, euismod ex quis, congue augue. Aliquam erat volutpat. Quisque ut turpis felis. Duis et rutrum nisl, eget scelerisque tellus.
        </p>

        <NavLink to={'/about'} text={'Read More'} style={styles.readMore} />
      </div>

      <ShowCards headerText={'Watch Alejandra'} />

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
    height: 600,
    width: 'auto',

  },

  // ABOUT -------------------------

  aboutWrapper: {
    marginTop: 0,
    paddingTop: 80,
    paddingBottom: 80,

    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.reallyLightGrey,
  },

  aboutHeader: {
    fontSize: '3em',
    fontWeight: '800',

    marginBottom: 15,
  },

  aboutText: {
    fontSize: '1.2em',
    marginBottom: 15,

    textAlign: 'center',
    lineHeight: '180%',

    maxWidth: 650,
  },

  readMore: {
    fontSize: '1em',
    margin: 0,
    color: colors.blue,
  },

}

export default Home;
