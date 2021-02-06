import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  camera: {flex: 5, alignItems: 'stretch'},
  topView: {flex: 0},
  bottomView: {flex: 1, height: 128},
  listTitle: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    width: '30%',
    margin: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  list: {flex: 1},
});
