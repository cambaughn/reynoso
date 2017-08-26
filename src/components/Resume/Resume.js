

/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Resume = () => {
  let styles = window.innerWidth > 1000 ? desktopStyles() : {...desktopStyles(), ...mobileStyles()};

  return (
    <div style={styles.container}>
      <h1>Resume</h1>
      <a
        href='/assets/photos/headshots.zip'
        download='Alejandra Reynoso Headshots'
      >
        Download Headshots
      </a>
      <a 
        href='/assets/Alejandra_Reynoso_Resume.pdf'
        download='Alejandra Reynoso Resume'
      >
        Download Resume
      </a>
    </div>
  )
}


const desktopStyles = () => {
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
    },
  }
}

const mobileStyles = () => {
  return {
    // --------------------- CONTAINER

    container: {
      minHeight: window.innerHeight - 80,
      backgroundColor: 'pink'
    },
  }
}

export default Resume;
