import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    btn: {
      marginVertical: 10,
      width: '30%',
      alignSelf: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      paddingVertical: 10,
      borderRadius: 20,
    },
  });
