import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import Movie from '../pages/Movies/Movie';
import Episodes from '../pages/TvShow/Episodes';
import Episode from '../pages/TvShow/Episode';
import People from '../pages/People/People';
import Character from '../pages/People/Character';
import Search from '../pages/Search/Search';
import WhishList from '../pages/WishList/WishList';
import Settings from '../pages/Settings/Settings';
import WishList from '../pages/WishList/WishList';

export type RootStackParamList = {
  Home: undefined;
  Movies: undefined;
  Movie: {
    id: number;
  };
  Episodes: undefined;
  Episode: {
    id: number;
  };
  People: undefined;
  Character: {
    id: number;
  };
  Search: undefined;
  Settings: undefined;
  WishList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, title: 'Main'}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Movie" component={Movie} />
      <Stack.Screen name="Episodes" component={Episodes} />
      <Stack.Screen name="Episode" component={Episode} />
      <Stack.Screen name="People" component={People} />
      <Stack.Screen name="Character" component={Character} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="WishList" component={WishList} />
    </Stack.Navigator>
  );
};

export default MainStack;
