
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NewsTag from './NewsTag';
import NewsLink from './NewsLink';
import colors from '../../util/colors';

const NewsItem = ({ tag, color, headline, link, text, date }) => {
  return (
    <div style={styles.container}>
      <NewsTag tag={tag} backgroundColor={color} />
      <NewsLink
        headline={headline}
        color={color}
        to={link}
      />
      <div style={styles.dateWrapper}>
        <i className="fa fa-clock-o" aria-hidden="true" style={styles.clock}></i>
        <p style={styles.date}>{date}</p>
      </div>

      <p style={styles.text}>{text}</p>

    </div>
  )
}


const styles = {
  // --------------------- CONTAINER

  container: {
    width: '100%',
    marginBottom: 50,
  },

  // --------------------- TEXT

  text: {
    marginBottom: 8,
    lineHeight: '150%',
  },

  dateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    color: colors.darkGrey,
    fontSize: '0.8em',

    marginBottom: 8,
  },

  clock: {
    marginRight: 5,
  },

  date: {
  },

}

export default NewsItem;
