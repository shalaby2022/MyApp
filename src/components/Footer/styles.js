import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    footerOuterWrapper: {
      width: '97%',
      height: 0,
      backgroundColor: 'red',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 160,
      zIndex: 0,
    },
    footerInnerWrapper: theme => ({
      width: '97%',
      height: 75,
      alignSelf: 'center',
      backgroundColor: theme == 'dark' ? 'white' : 'black',
      // borderBottomEndRadius: 50,
      // borderBottomStartRadius: 50,
      // borderTopEndRadius: 25,
      // borderTopStartRadius: 25,
      borderRadius: 50,
      zIndex: 2000,
    }),
    footerOuterCircleWrapper: theme => ({
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme == 'dark' ? '#eee' : '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'relative',
      top: 40,
      zIndex: 3000,
    }),
    footerInnerCircleWrapper: theme => ({
      width: 68,
      height: 68,
      borderRadius: 34,
      backgroundColor: theme == 'dark' ? 'white' : 'black',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    btnsWrapper: {
      width: '98%',
      height: '98%',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 7,
    },
    iconWrapper: {
      width: '23%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    secIconWrapper: {
      width: '23%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 20,
    },
    thirdIconWrapper: {
      width: '23%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 20,
    },
    Icon: (active, theme) => ({
      width: 28,
      height: 28,
      tintColor:
        active && theme == 'dark'
          ? 'black'
          : active && theme == 'light'
          ? 'white'
          : !active && theme == 'light'
          ? '#aaa'
          : active && theme == 'green'
          ? '#070'
          : '#999',
    }),
  });
