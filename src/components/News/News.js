
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';

const News = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>News</h1>

      <div style={styles.list}>
        <NewsItem
          tag={'Castlevania'}
          headline={'Netflix Orders Second Season of \'Castlevania\''}
          text={'Netflix says it has ordered a second season of its animated series, Castlevania. Based on the popular, video-game franchise of the same name from Japan\'s Konami, the show is billed as...'}
          date={'July 27, 2017'}
        />
      </div>
    </div>
  )
}


const styles = {
  // --------------------- CONTAINER

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // --------------------- NEWS

  header: {
    marginTop: 30,
    marginBottom: 30,

    // borderBottom: '1px solid black',
  },

  list: {
    width: 500,
  },
}

export default News;
