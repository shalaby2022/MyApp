import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import Header from '../../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerStackParamList} from '../../navigations/DrawerStack';

type Prop = NativeStackScreenProps<DrawerStackParamList>;

const ProfileScreen = ({navigation}: Prop) => {
  return (
    <View style={styles().container}>
      <Header name="Profile" drawerItems navigation={navigation} />
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
