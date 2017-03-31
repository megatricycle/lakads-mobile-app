import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Images } from '../Themes';
import styles from './Styles/AvatarDropDownStyle';

export default class AvatarDropDown extends React.Component {
  handlePress () {
    window.alert('hi');
  }

  render () {
    return (
      <TouchableHighlight onPress={this.handlePress} underlayColor={'rgba(255, 255, 255, 0.3)'}>
        <View style={styles.container}>
          <Icon
            name='md-arrow-dropdown'
            size={15}
            color={Colors.snow}
          />

          <Image
            source={Images.camel}
            style={styles.avatar}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

// // Prop type warnings
// AvatarDropDown.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// AvatarDropDown.defaultProps = {
//   someSetting: false
// }
