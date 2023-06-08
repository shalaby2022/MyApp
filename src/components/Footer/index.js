import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {
  NavigateToSearch,
  NavigateToHome,
  NavigateToWishList,
  NavigateToSettings,
  NavigateToNotifications,
  NavigateToMovies,
} from '../../navigations/Navigators';

const FooterTab = ({
  maninIcon,
  _1stIcon,
  _2ndIcon,
  _3rdIcon,
  _4thIcon,
  navigation,
  active,
  theme,
}) => {
  return (
    <View style={styles().footerOuterWrapper}>
      <View style={styles().footerOuterCircleWrapper(theme)}>
        <TouchableOpacity
          style={styles().footerInnerCircleWrapper(theme)}
          onPress={() => NavigateToSearch(navigation)}>
          <Image
            source={maninIcon}
            style={styles().Icon(active == 'Search', theme)}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles().footerInnerWrapper(theme)}>
        <View style={styles().btnsWrapper}>
          <TouchableOpacity
            style={styles().iconWrapper}
            onPress={() => NavigateToHome(navigation)}>
            <Image
              source={_1stIcon}
              style={styles().Icon(active == 'Home', theme)}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity
            style={styles().secIconWrapper}
            onPress={() => NavigateToWishList(navigation)}>
            <Image
              source={_2ndIcon}
              style={styles().Icon(active == 'WishList', theme)}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity
            style={styles().thirdIconWrapper}
            onPress={() => NavigateToMovies(navigation)}>
            <Image
              source={_3rdIcon}
              style={styles().Icon(active == 'Movies', theme)}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity
            style={styles().iconWrapper}
            onPress={() => NavigateToSettings(navigation)}>
            <Image
              source={_4thIcon}
              style={styles().Icon(active == 'Settings', theme)}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FooterTab;
