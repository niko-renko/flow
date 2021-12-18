import React from 'react';

import {
  Text,
  TouchableOpacity
} from 'react-native';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack';

import Main from './components/Main.jsx';
import Welcome from './components/Welcome.jsx';
import SignUpScreen from './components/SignUpScreen.jsx';
import LoginScreen from './components/LoginScreen.jsx';

import Contacts from './components/Contacts.jsx';
import Customize from './components/Customize.jsx';
import QRScanner from './components/QRScanner.jsx';
import QRGenerator from './components/QRGenerator.jsx';

const Stack = createStackNavigator();

const NoAuth = () => {
  return (
    <Stack.Navigator initialRouteName='AuthScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Welcome' component={Welcome}/>
      <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    </Stack.Navigator>
  );
};

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Main' component={Main}/>
      <Stack.Screen name='Contacts' component={Contacts}/>
      <Stack.Screen name='Customize' component={Customize}/>
      <Stack.Screen name='QRScanner' component={QRScanner}/>
      <Stack.Screen name='QRGenerator' component={QRGenerator}/>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth' screenOptions={{headerShown: false, headerLeft: null, gesturesEnabled: false}}>
        <Stack.Screen name='Auth' component={Auth}/>
        <Stack.Screen name='NoAuth' component={NoAuth}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;