import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Styles from './Styles/NavigationContainerStyles';
import NavigationDrawer from './NavigationDrawer';

// screens identified by the router
import LoginScreen from '../Containers/LoginScreen';
import HomeScreen from '../Containers/HomeScreen';
import PromoScreen from '../Containers/PromoScreen';

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='loginScreen' component={LoginScreen} title='LoginScreen' hideNavBar />
            <Scene key='homeScreen' component={HomeScreen} title='HomeScreen' hideNavBar />
            {/* temp initial */}

            <Scene key='promoScreen' component={PromoScreen} title='PromoScreen' hideNavBar />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
