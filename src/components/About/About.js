/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ShowCards from './ShowCards';
import colors from '../../util/colors';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topSection}>
        <div style={styles.photoWrapper}>

        </div>

        <div style={styles.bio}>
          <h2 style={styles.header}>About Alejandra</h2>

          <p style={styles.text}>
            Alejandra started her acting career in commercials--working both the English-speaking and Spanish-speaking markets--as well as doing student films and local theater. Eventually she transitioned into Voice Over, where she discovered a love for building and inhabiting animated characters.
          </p>

          <p style={styles.text}>
            In high school Alejandra landed the roles of Elena Schnurr on The Hub’s <a href='http://www.imdb.com/title/tt1705038/' target='_blank' rel='noopener noreferrer' style={styles.inlineLink}>G.I. Joe Renegades,</a> and the sweet, well-meaning Fairy of Nature, Flora, on Nickelodeon’s <a href='http://www.imdb.com/title/tt0421482/' target='_blank' rel='noopener noreferrer' style={styles.inlineLink}>Winx Club.</a> She was fortunate to work on 5 seasons as a series regular, and on two movies for the fairy franchise.
          </p>

          <p style={styles.text}>
            While working on the show she was also accepted to Stanford University where she majored in Communication (Media Studies) and minored in Japanese Language and Culture. She graduated from Stanford University in 2016 with a B.A. with Honors and moved back home to Los Angeles to pursue a full-time acting career.
          </p>

          <p style={styles.text}>
            After returning to Los Angeles she studied script analysis and rehearsal prep through a variation of the Chubbuck Technique with veteran actor and acting coach Rod Rowland. This technique incorporates traditional teachings such as the Stanislavski Method while incorporating modern behavioral science and psychology.
          </p>

          <p style={styles.text}>
            Currently you can hear Alejandra on Netflix’s hit video game adaptation <a href='http://www.imdb.com/title/tt6517102/' target='_blank' rel='noopener noreferrer' style={styles.inlineLink}>Castlevania,</a> where she voices the sassy sorceress Sypha Belnades alongside Richard Armitage (The Hobbit, Berlin Station), Graham McTavish (Preacher, Outlander), James Callis (Battlestar Galactica), and Tony Amendola (Stargate SG1, Once Upon A Time)!
          </p>

          <p style={styles.text}>
            Alejandra is an animal lover, tea enthusiast, aspiring world traveller, closet writer, ballet folklorico dancer, and Netflix binge-watcher! Feel free to connect with her on social media!
          </p>
        </div> {/* BIO */}

      </div> {/* TOP SECTION */}


      <ShowCards headerText={'Watch Alejandra'} />

    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {
    marginTop: 40,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // TOP SECTION --------------------

  topSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  // IMAGE ---------------------------


  photoWrapper: {
    width: 400,
    height: 400,
    backgroundColor: colors.warmGrey,

  },

  // BIO ----------------------------

  bio: {
    width: 600,
    marginLeft: 80,
  },

  header: {
    marginTop: 0,
  },

  text: {
    marginTop: 0,
    marginBottom: '1.5em',
    lineHeight: '180%',
  },

  inlineLink: {
    textDecoration: 'none',
    fontWeight: '900',
    color: 'black',
  },
}

export default About;
