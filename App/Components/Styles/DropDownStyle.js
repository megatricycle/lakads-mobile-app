import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.snow,
    position: 'absolute',
    left: 10,
    top: 35,
    width: 125,
    zIndex: 100,
    padding: 10
  },
  item: {
    color: Colors.tertiary
  }
});
