/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';
import SideNav from './SideNav';
import colors from '../../util/colors';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNavVisible: false,
    }

    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav() {
    this.setState({ sideNavVisible: !this.state.sideNavVisible });
  }

  render() {

    let desktopWidth = window.innerWidth > 700;

    let styles = desktopWidth ? desktopStyles() : {...desktopStyles(), ...mobileStyles()};

    if (desktopWidth) {
      return (
        <div style={styles.container}>
          <div>
            <Link to={'/'} style={styles.brand}>
              {/* <img src={require('../../assets/photos/reynoso-wordmark.png')} alt={'Ale'} style={styles.brandImage}/> */}
              <h1>AR</h1>
            </Link>
          </div>

          <div style={styles.links}>

            <NavLink to={'/'} text={'Home'} />
            <NavLink to={'/about'} text={'About'} />
            <NavLink to={'/reels'} text={'Reels'} />
            <NavLink to={'/resume'} text={'Resume & Headshots'} />
            <NavLink to={'/news'} text={'News'} />
            <NavLink to={'/contact'} text={'Contact'} />

          </div>
        </div>
      )
    } else {
      return (
        <div style={styles.container}>
          <div>
            <Link to={'/'} style={styles.brand}>
              <h1>AR</h1>
            </Link>
          </div>

          <div>
            <i
              className="fa fa-bars"
              aria-hidden="true"
              style={styles.hamburger}
              onClick={this.toggleSideNav}
            ></i>
          </div>

          <SideNav visible={this.state.sideNavVisible} toggleSideNav={this.toggleSideNav} />
        </div>
      )
    }
  }
}


const desktopStyles = () => {
  return  {
    container: {
      width: 'inherit',
      height: 80,

      paddingLeft: 60,
      paddingRight: 60,

      backgroundColor: 'transparent',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    // BRAND -------------------------------------

    brand: {
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
    },

    brandImage: {
      height: 35,
    },

    // RIGHT-SIDE LINKS --------------------------

    links: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    link: {
      marginLeft: 40,

      color: 'black',
      textDecoration: 'none',
    }
  }
}

const mobileStyles = () => {
  return  {
    container: {
      width: 'inherit',
      height: 80,

      paddingLeft: 30,
      paddingRight: 30,

      backgroundColor: 'transparent',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    // BRAND -------------------------------------

    brand: {
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
    },

    brandImage: {
      height: 35,
    },


    // LINKS --------------------------

    hamburger: {
      fontSize: 25,
    },

    links: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    link: {
      marginLeft: 40,

      color: 'black',
      textDecoration: 'none',
    }
  }
}



export default NavBar;
