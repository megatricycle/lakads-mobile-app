import React from 'react';
import { View, Text } from 'react-native';

import OtherPromo from './OtherPromo';

import styles from './Styles/OtherPromosStyle';

export default class OtherPromos extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.likeText}>You might also like</Text>

        <View style={styles.promosContainer}>
          <OtherPromo />
          <OtherPromo />
          <OtherPromo />
          <OtherPromo />
          <OtherPromo />
          <OtherPromo />
          <OtherPromo />
        </View>
      </View>
    );
  }
}

// // Prop type warnings
// OtherPromos.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// OtherPromos.defaultProps = {
//   someSetting: false
// }
