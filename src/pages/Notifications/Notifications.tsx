import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import FooterTab from '../../components/Footer';
import {IMAGES} from '../../constants/Images';
import Header from '../../components/Header';
import {DrawerStackParamList} from '../../navigations/DrawerStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Prop = NativeStackScreenProps<DrawerStackParamList>;

const Notifications = ({navigation}: Prop) => {
  const theme: string = 'light';
  return (
    <View style={styles().container}>
      <Header name="Notifications" drawerItems navigation={navigation} />
    </View>
  );
};

export default Notifications;
