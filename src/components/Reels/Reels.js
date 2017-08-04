/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import ShowCards from '../SocialLinks/ShowCards';

const Reels = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Theatrical Reel</h2>
      <ReactPlayer
        url='https://vimeo.com/109546414'
        style={styles.videoPlayer}
      />

      <h2 style={styles.header}>Voiceover Reel</h2>
      <ReactPlayer
        controls
        url='assets/audio/animation_reel.mp3'
        style={styles.audioPlayer}
        fileConfig={{
          attributes: {
            style: styles.audioPlayer,
          }
        }}
      />

      <ShowCards headerText={'Watch Alejandra'} />
    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {
    width: '100%',
    height: '100%',

    paddingTop: 50,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // TEXT --------------------------

  header: {
    marginBottom: 20,
  },

  // PLAYER ------------------------

  videoPlayer: {
    width: '100%',
    backgroundColor: 'white',

    marginBottom: 80,
  },

  audioPlayer: {
    height: 30,
    width: '100%',
    backgroundColor: 'white',
  },
}

export default Reels;
