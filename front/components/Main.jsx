import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack';

import CircularButton from './CircularButton.jsx';
import FlowButton from './FlowButton.jsx';

import contacts from '../assets/contacts.png';
import customize from '../assets/customize.png';
import profile from '../assets/profile.png';
import scan from '../assets/scan.png';

const Main = (
  {
    navigation
  }
) => {
  return (
    <View style={styles.container}>
      <View style={styles.vertical}>
        <View style={styles.horizontal}>
          <CircularButton image={contacts} pressHandler={() => navigation.navigate('Contacts')}/>
          <CircularButton image={profile} pressHandler={() => navigation.navigate('Test')}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <FlowButton press={() => navigation.navigate('QRGenerator')}/>
        </View>
        <View style={styles.horizontal}>
          <CircularButton image={customize} pressHandler={() => navigation.navigate('Customize')}/>
          <CircularButton image={scan} pressHandler={() => navigation.navigate('QRScanner')}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#08082E',
      padding: 30
    },
    horizontal: {
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    vertical: {
      height: '100%',
      justifyContent: 'space-between'
    }
  }
);

export default Main;