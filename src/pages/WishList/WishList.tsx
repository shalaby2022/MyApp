import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerStackParamList} from '../../navigations/DrawerStack';
import FooterTab from '../../components/Footer';
import {IMAGES} from '../../constants/Images';

type Prop = NativeStackScreenProps<DrawerStackParamList>;

const WishList = ({navigation}: Prop) => {
  const theme: string = 'light';
  return (
    <View style={styles().container}>
      <Header name="WishList" navigation={navigation} back stack />
      <Text>WishList Screen</Text>
      <FooterTab
        maninIcon={IMAGES.search}
        _1stIcon={IMAGES.home}
        _2ndIcon={IMAGES.movie}
        _3rdIcon={IMAGES.star}
        _4thIcon={IMAGES.settings}
        theme={theme}
        navigation={navigation}
        active="WishList"
      />
    </View>
  );
};

export default WishList;
