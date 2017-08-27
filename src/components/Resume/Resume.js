

/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PhotoSlider from './PhotoSlider';

const Resume = () => {
  let styles = window.innerWidth > 1000 ? desktopStyles() : {...desktopStyles(), ...mobileStyles()};

  return (
    <div style={styles.container}>
      <PhotoSlider />

      <div style={styles.downloadWrapper}>
        <div style={styles.textWrapper}>

          {/* <h1 style={styles.header}>Download</h1> */}

          <a
            href='/assets/photos/headshots.zip'
            download='Alejandra Reynoso Headshots'
            style={styles.download}
          >
            <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>  Download Headshots
          </a>
          <a
            href='/assets/Alejandra_Reynoso_Resume.pdf'
            download='Alejandra Reynoso Resume'
            style={styles.download}
          >
            <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>  Download Resume
          </a>

        </div>
      </div>

    </div>
  )
}


const desktopStyles = () => {
  return {
    // --------------------- CONTAINER

    container: {
      minHeight: window.innerHeight - 80,
      width: '100%',
      paddingTop: 20,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      overflow: 'hidden',
    },


    // --------------------- DOWNLOAD

    downloadWrapper: {
      height: 'inherit',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',

      // backgroundColor: 'pink',
    },

    textWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },

    header: {
      marginBottom: 20,
    },

    download: {
      color: 'black',
      textDecoration: 'none',
      // fontWeight: 'bold',
      fontSize: 18,

      marginBottom: 30,
    }

  }
}

const mobileStyles = () => {
  return {
    // --------------------- CONTAINER

    container: {
      minHeight: window.innerHeight - 80,
      width: '100%',
      paddingTop: 30,

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',

      overflow: 'hidden',
    },
  }
}

export default Resume;
