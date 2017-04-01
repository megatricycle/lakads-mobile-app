import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 70,
    height: 70
  },
  content: {
    flex: 1,
    padding: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 16
  },
  provider: {
    fontSize: 10
  }
});
