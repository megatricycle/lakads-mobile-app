import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.primary,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 50
  },
  username: {
    color: Colors.snow
  }
});
