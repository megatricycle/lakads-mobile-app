import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 20
  },
  provider: {
    fontSize: 12
  },
  upperContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  distance: {
    fontSize: 18
  },
  recommendationContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Metrics.doubleBaseMargin
  },
  star: {
    marginRight: 6
  },
  recommendedText: {
    fontStyle: 'italic'
  }
});
