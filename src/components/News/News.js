
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';
import colors from '../../util/colors';

const News = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>News</h1>

      <div style={styles.list}>
        <NewsItem
          tag={'Castlevania'}
          color={colors.red}
          headline={'Netflix Orders Second Season of \'Castlevania\''}
          link={'https://www.tvinsider.com/311968/netflix-orders-second-season-of-castlevania/'}
          text={'Netflix says it has ordered a second season of its animated series, Castlevania. Based on the popular, video-game franchise of the same name from Japan\'s Konami, the show is billed as...'}
          date={'July 27, 2017'}
        />
        <NewsItem
          tag={'Winx Club'}
          color={colors.green}
          headline={'Reports are in: Winx Club is the Best'}
          link={'http://www.imdb.com/title/tt0421482/'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dictum odio. Donec arcu risus, hendrerit accumsan sem id, facilisis vehicula velit. Maecenas non arcu tincidunt, euismod ex quis, congue augue.'}
          date={'June 10, 2017'}
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

    minHeight: window.innerHeight - 80,
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
