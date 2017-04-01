import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Card } from 'react-native-elements';
import { Images } from '../Themes';
import { Actions as NavigatorActions } from 'react-native-router-flux';

import styles from './Styles/OtherPromoStyle';

export default class OtherPromo extends React.Component {
  handlePress () {
    NavigatorActions.promoScreen();
  }

  render () {
    return (
      <Card
        containerStyle={styles.container}
        wrapperStyle={styles.wrapper}
      >
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Image
            source={Images.camel}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>
                20% off Camel Price
              </Text>
              <Text style={styles.provider}>
                Taculog Pet Store
              </Text>
            </View>
            <View>
              <Text style={styles.distance}>
                0.5 km
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Card>
    );
  }
}

// // Prop type warnings
// OtherPromo.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// OtherPromo.defaultProps = {
//   someSetting: false
// }
