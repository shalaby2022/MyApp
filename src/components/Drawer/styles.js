import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 7,
    },
    headerWrapper: {
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 20,
      alignItems: 'center',
    },
    imgWrapper: {
      width: 70,
      height: 70,
      borderRadius: 40,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      marginEnd: 20,
    },
    img: {
      width: 45,
      height: 45,
      tintColor: '#333',
    },
    ruler: {
      width: '80%',
      height: 1,
      backgroundColor: '#333',
      alignSelf: 'center',
    },
    infoWrapper: {
      width: '60%',
      justifyContent: 'center',
    },
    name: {
      fontSize: 18,
      fontWeight: '600',
      paddingBottom: 8,
      color: Colors.text_dark,
    },
    role: {
      color: '#999',
    },
    iconWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      paddingVertical: 10,
      paddingLeft: 5,
      borderWidth: 1,
      borderBottomColor: '#999',
      borderRightColor: '#999',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      elevation: 2.5,
      shadowColor: '#999',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    icon: {
      width: 24,
      height: 23,
      marginEnd: 20,
      marginStart: 3,
    },
    btnName: {
      fontSize: 17,
      color: '#666',
      fontWeight: '500',
    },
    contactUsWrapper: {},
    contactText: {
      textAlign: 'center',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: '500',
      paddingBottom: 10,
      color: Colors.text_dark,
    },
    contactIconsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contactIconWrapper: {
      width: '49%',
      backgroundColor: '#eee',
      marginBottom: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    contactIcons: flag => ({
      width: flag ? 30 : 35,
      height: flag ? 30 : 35,
    }),
  });
