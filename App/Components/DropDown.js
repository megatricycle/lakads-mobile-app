import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styles from './Styles/DropDownStyle';
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux';

export default class DropDown extends React.Component {
  handlePress () {
    NavigationActions.loginScreen({type: ActionConst.REPLACE});
  }

  render () {
    return (
      <TouchableNativeFeedback onPress={this.handlePress}>
        <View style={styles.container}>
          <Text style={styles.item}>Log out</Text>
        </View>
      </TouchableNativeFeedback>
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
