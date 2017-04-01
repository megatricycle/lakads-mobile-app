import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styles from './Styles/NavBarStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../Themes';
import { Actions as NavigatorActions } from 'react-native-router-flux';

import AvatarDropDown from './AvatarDropDown';

export default class NavBar extends React.Component {
  handleBack () {
    NavigatorActions.pop();
  }

  render () {
    return (
      <View>
        {this.props.backButton
          ? (
            <View style={styles.container}>
              <TouchableNativeFeedback onPress={this.handleBack}>
                <View style={styles.backButton}>
                  <Icon
                    name='md-arrow-round-back'
                    size={20}
                    color={Colors.snow}
                  />
                </View>
              </TouchableNativeFeedback>
              <Text style={styles.promoName}>Promo name</Text>
            </View>
          )
        : (
          <View style={styles.container}>
            <AvatarDropDown
              showDropdown={this.props.showDropdown}
              />
            <Text style={styles.username}>{this.props.screenName}</Text>
          </View>
          )
        }
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
