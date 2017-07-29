/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import colors from '../../util/colors';

const Footer = () => {
  return (
    <div style={styles.container}>

    </div>
  )
}


const styles = {
  container: {
    backgroundColor: '#2B2B2B',
    // borderTop: `1px solid ${colors.midGrey}`,

    width: 'inherit',
    height: 100,

    marginTop: 100,
  },
}

export default Footer;
