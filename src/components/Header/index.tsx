import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {toggleDrawer} from '../../navigations/Navigators';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerStackParamList} from '../../navigations/DrawerStack';

type HeaderProps = {
  name: string;
  navigation: NativeStackNavigationProp<DrawerStackParamList>;
  drawerItems?: boolean;
  stack?: boolean;
  back?: boolean;
};

const Header = ({name, navigation, drawerItems, stack, back}: HeaderProps) => {
  const NavigationBack = (
    navigation: NativeStackNavigationProp<DrawerStackParamList>,
  ) => {
    return navigation.goBack();
  };

  return (
    <View style={styles().mainHeader}>
      <View
        style={
          !back
            ? styles().drawerHeaderWrapper
            : name == 'SignIn'
            ? styles().signInHeader
            : stack
            ? styles().postHeader
            : null
        }>
        {back && (
          <TouchableOpacity
            onPress={() => NavigationBack(navigation)}
            style={styles().backWrapper}>
            <Image
              source={IMAGES.back}
              resizeMode="contain"
              style={styles().backImage}
            />
          </TouchableOpacity>
        )}
        <Text style={styles().headerText}>{name}</Text>
        {drawerItems && (
          <TouchableOpacity onPress={() => toggleDrawer(navigation)}>
            <Image
              source={IMAGES.drawer}
              resizeMode="contain"
              style={styles().drawerImage}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
