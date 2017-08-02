/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div style={styles.container}>
      <img src={require('../assets/photos/hero.jpg')} alt={'Alejandra portrait'} style={styles.hero}/>
    </div>
  )
}


const styles = {
  container: {
    width: 'inherit',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  hero: {
    width: 500,
    height: 'auto',
  },
}

export default Home;
