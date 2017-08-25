
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NewsTag = ({ tag, backgroundColor }) => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.tagWrapper, backgroundColor }}>
        <h5 style={styles.text}>{tag}</h5>
      </div>
    </div>
  )
}


const styles = {
  // --------------------- CONTAINER

  container: {
    display: 'inline-block',
    marginBottom: 10,
  },

  // --------------------- TAG

  tagWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,

    borderRadius: 20,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: '0.8em',
  },

}

export default NewsTag;
