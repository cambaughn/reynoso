/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShowCardItem from './ShowCardItem';

const ShowCards = ({ headerText }) => {

  let styles = window.innerWidth > 700 ? desktopStyles() : {...desktopStyles(), ...mobileStyles()};

  return (
    <div style={styles.container}>

      <h2 style={styles.headerText}>{headerText}</h2>

      <div style={styles.images}>

        <ShowCardItem
          to={'http://www.imdb.com/title/tt6517102/'}
          imageSource={'https://mentalmultiverse.files.wordpress.com/2017/07/mv5bzjdkm2q0nzcty2rizs00zjcylwizntetmdbimjm0ymiwmtm1xkeyxkfqcgdeqxvynzq2mjy3mjm-_v1_.jpg'}
          alt={'Castlevania'}
        />

        <ShowCardItem
          to={'http://www.imdb.com/title/tt0421482/'}
          imageSource={'http://img07.deviantart.net/a7dd/i/2012/327/9/f/winx_club_nick_believix_by_winxclub157372-d5lwl2j.jpg'}
          alt={'Winx Club'}
        />

      </div>

    </div>
  )
}


const desktopStyles = () => {
  return {
    // CONTAINER ---------------------

    container: {
      marginTop: 40,

      width: '100%',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

    },

    // TEXT --------------------------

    headerText: {
      marginBottom: 40,
      fontSize: '1.8em',
    },

    // IMAGES ------------------------

    images: {
      width: 700,
      height: 160,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    imageWrapper: {
      width: 250,
      height: 140,

      backgroundColor: 'grey',

      overflow: 'hidden',
    },

    image: {
      width: '100%',
    },
  }
}

const mobileStyles = () => {
  return {

    // TEXT --------------------------

    headerText: {
      marginBottom: 40,
      fontSize: '1.8em',
    },

    // IMAGES ------------------------

    images: {
      width: '100%',
      height: 320,

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

  }
}


export default ShowCards;
