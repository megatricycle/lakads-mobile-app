import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderColor: Colors.snow,
    borderWidth: 0.5,
    marginLeft: 10
  }
});
