import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerStackParamList} from '../../navigations/DrawerStack';
import FooterTab from '../../components/Footer';
import {IMAGES} from '../../constants/Images';

type Prop = NativeStackScreenProps<DrawerStackParamList>;

const Movie = ({navigation}: Prop) => {
  const theme: string = 'light';
  return (
    <View style={styles().container}>
      <Header name="Movie" navigation={navigation} back stack />
      <Text>Home Screen</Text>
    </View>
  );
};

export default Movie;
