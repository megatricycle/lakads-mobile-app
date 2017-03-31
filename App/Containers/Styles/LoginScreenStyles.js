import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.primary
  },
  form: {
    margin: Metrics.baseMargin,
    marginTop: 0,
    borderRadius: 4
  },
  row: {
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'center',
    width: 300,
    height: 300,
    margin: 0
  },
  introText: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: 24,
    margin: 0
  }
});
