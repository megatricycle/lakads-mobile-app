import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import NavBar from '../Components/NavBar';
import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/PromoScreenStyle';

class Promo extends React.Component {
  render () {
    return (
      <View style={styles.bg}>
        <NavBar showDropdown={this.props.showDropdown} screenName={this.props.user.screen_name} backButton />
        <ScrollView>
          <Image
            source={Images.camel}
            style={styles.image}
          />
          <View style={styles.content}>
            <View style={styles.upperPart}>
              <View>
                <Text style={styles.promoName}>Promo name</Text>
                <Text style={styles.promoProvider}>Taculog's Pet Store</Text>
              </View>
              <View>
                <Text style={styles.distance}>0.5 km</Text>
              </View>
            </View>
            <View style={styles.buttonGroup}>
              <Button
                title={'Accept'}
                color={Colors.tertiary}
                onPress={() => {}}
              />
              <Button
                title={'Decline'}
                color={Colors.red}
                onPress={() => {}}
              />
            </View>
            <View style={styles.descriptionPart}>
              <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</Text>
            </View>
            <Text style={styles.locationText}>Location</Text>
            <View style={styles.mapWrapper}>
              <View style={styles.mapContainer}>
                <MapView
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                  style={styles.map}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Promo);
