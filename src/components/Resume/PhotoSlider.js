
/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


const PhotoSlider = () => {
  return (
    <div style={styles.container}>

      <Slider
        dots={true}
        infinite={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        fade={true}
        centerMode={true}
        arrows={false}
        style={styles.slider}
      >
        <div style={styles.slide}>
          <img src={require('../../assets/photos/headshots/theatrical-1.jpg')} alt={'Alejandra theatrical 1'} style={styles.photo} />
        </div>
        <div style={styles.slide}>
          <img src={require('../../assets/photos/headshots/theatrical-2.jpg')} alt={'Alejandra theatrical 2'} style={styles.photo} />
        </div>
        <div style={styles.slide}>
          <img src={require('../../assets/photos/headshots/commercial-1.jpg')} alt={'Alejandra commercial'} style={styles.photo} />
        </div>
        <div style={styles.slide}>
          <img src={require('../../assets/photos/headshots/postcard.jpg')} alt={'Alejandra postcard'} style={styles.photo} />
        </div>
      </Slider>

    </div>
  )
}


const styles = {
  // --------------------- CONTAINER

  container: {
    width: window.innerWidth / 2.5,
    marginBottom: 30,

    // backgroundColor: 'yellow',
  },

  // --------------------- SLIDER

  slide: {
    width: '100%',
    height: window.innerHeight - 100,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // --------------------- PHOTO

  photo: {
    height: '100%',
    width: 'auto',
  },
}

export default PhotoSlider;
