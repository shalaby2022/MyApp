import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import WhishList from '../pages/WishList/WishList';

const Bottom = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  WhishList: undefined;
};

const MainStack = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={HomeScreen} />
      <Bottom.Screen name="Search" component={Search} />
      <Bottom.Screen name="WhishList" component={WhishList} />
    </Bottom.Navigator>
  );
};

export default MainStack;
