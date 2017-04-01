import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions as NavigatorActions } from 'react-native-router-flux';

import { Images, Colors } from '../Themes';

import styles from './Styles/PrimaryPromoStyle';

export default class PrimaryPromo extends React.Component {
  handlePress () {
    NavigatorActions.promoScreen();
  }

  render () {
    return (
      <Card
        image={Images.camel}
        imageStyle={styles.image}
        containerStyle={styles.container}
        >

        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.upperContainer}>
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

        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.recommendationContainer}>
            <Icon
              name='star'
              size={15}
              color={Colors.accent}
              style={styles.star}
              />
            <Text style={styles.recommendedText}>
                Recommended for you
              </Text>
          </View>
        </TouchableWithoutFeedback>
      </Card>
    );
  }
}

// // Prop type warnings
// PrimaryPromo.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PrimaryPromo.defaultProps = {
//   someSetting: false
// }
