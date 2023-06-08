import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerStack from './src/navigations/DrawerStack';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <DrawerStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
