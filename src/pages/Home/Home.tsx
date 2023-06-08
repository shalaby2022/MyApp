import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import FooterTab from '../../components/Footer';
import {IMAGES} from '../../constants/Images';
import Header from '../../components/Header';
import {DrawerStackParamList} from '../../navigations/DrawerStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Prop = NativeStackScreenProps<DrawerStackParamList>;

const HomeScreen = ({navigation}: Prop) => {
  const theme: string = 'light';
  return (
    <View style={styles().container}>
      <Header name="Home" drawerItems navigation={navigation} />
      <Text>Home Screen</Text>
      <FooterTab
        maninIcon={IMAGES.search}
        _1stIcon={IMAGES.home}
        _2ndIcon={IMAGES.movie}
        _3rdIcon={IMAGES.star}
        _4thIcon={IMAGES.settings}
        theme={theme}
        navigation={navigation}
        active="Home"
      />
    </View>
  );
};

export default HomeScreen;
