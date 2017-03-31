import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/DropDownStyle';

export default class DropDown extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Log out</Text>
      </View>
    );
  }
}

// // Prop type warnings
// DropDown.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DropDown.defaultProps = {
//   someSetting: false
// }
