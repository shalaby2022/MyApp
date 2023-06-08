import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import FooterTab from '../../components/Footer';
import {IMAGES} from '../../constants/Images';
import Header from '../../components/Header';
import {DrawerStackParamList} from '../../navigations/DrawerStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Prop = NativeStackScreenProps<DrawerStackParamList>;

const Search = ({navigation}: Prop) => {
  const theme: string = 'light';
  return (
    <View style={styles().container}>
      <Header name="Search" navigation={navigation} back stack />
      <Text>Search Screen</Text>
      <FooterTab
        maninIcon={IMAGES.search}
        _1stIcon={IMAGES.home}
        _2ndIcon={IMAGES.movie}
        _3rdIcon={IMAGES.star}
        _4thIcon={IMAGES.settings}
        theme={theme}
        navigation={navigation}
        active="Search"
      />
    </View>
  );
};

export default Search;
