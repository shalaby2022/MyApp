import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    mainHeader: {
      width: '100%',
      height: 55,
      backgroundColor: Colors.bg_secondary,
    },
    drawerHeaderWrapper: {
      width: '60%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      backgroundColor: Colors.bg_secondary,
      alignSelf: 'flex-end',
    },
    signInHeader: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
      backgroundColor: Colors.bg_secondary,
    },
    postHeader: {
      width: '60%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      backgroundColor: Colors.bg_secondary,
      alignSelf: 'flex-start',
    },
    headerWrapper: {
      height: 55,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      backgroundColor: '#ccc',
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.text_dark,
    },
    backWrapper: {
      paddingHorizontal: 8,
      paddingVertical: 12,
    },
    backImage: {
      width: 20,
      height: 20,
      tintColor: '#333',
    },
    drawerImage: {
      width: 30,
      height: 30,
      tintColor: '#333',
    },
  });
