import React from 'react';
import { View } from 'react-native';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer} />
    );
  }
}
