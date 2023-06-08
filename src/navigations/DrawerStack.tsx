import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../pages/Profile/Profile';
import MainStack from './MainStack';
import Settings from '../pages/Settings/Settings';
import Notifications from '../pages/Notifications/Notifications';
import CustomDrawer from '../components/Drawer';

export type DrawerStackParamList = {
  Main: undefined;
  Profile: undefined;
  Settings: undefined;
  Search: undefined;
  Notifications: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Main" component={MainStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
