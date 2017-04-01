import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Metrics.marginVertical,
    paddingBottom: Metrics.baseMargin
  },
  likeText: {
    fontSize: 16
  },
  promosContainer: {
    marginVertical: Metrics.baseMargin
  }
});
