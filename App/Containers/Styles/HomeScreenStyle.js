import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.grey,
    flex: 1
  },
  contentContainer: {
    flex: 1,
    padding: Metrics.doubleBaseMargin
  }
});
