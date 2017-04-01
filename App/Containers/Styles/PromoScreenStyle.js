import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  bg: {
    flex: 1,
    backgroundColor: Colors.grey
  },
  image: {
    resizeMode: 'cover',
    height: 200
  },
  content: {
    padding: 10
  },
  promoName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.black
  },
  promoProvider: {
    fontSize: 12
  },
  upperPart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  distance: {
    fontSize: 18
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 12,
    justifyContent: 'center'
  },
  button: {
    width: 100
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  mapWrapper: {
    height: 400,
    flex: 1
  },
  locationText: {
    marginVertical: 10,
    fontSize: 16
  }
});
