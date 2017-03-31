import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/NavBarStyle';

import AvatarDropDown from './AvatarDropDown';

export default class NavBar extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <AvatarDropDown />
        <Text style={styles.username}>megatricycle</Text>
      </View>
    );
  }
}

// // Prop type warnings
// NavBar.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// NavBar.defaultProps = {
//   someSetting: false
// }
