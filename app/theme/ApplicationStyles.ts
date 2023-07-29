import { StyleSheet } from 'react-native';
import { moderateScale } from './Metrics';
import Colors from './Colors';

// common style file
const applicationStyle = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  screen: {
    flex: 1,
  },
  textLabel: {
    fontSize: moderateScale(14),
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.backgroundColor,
  },
  safeAreaDark: {
    flex: 1,
    backgroundColor: Colors.dark.backgroundColor,
  },
});

export default applicationStyle;
