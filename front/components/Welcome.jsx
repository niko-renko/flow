import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView
} from 'react-native';
import AuthButton from './AuthButton.jsx';
import FlowButton from './FlowIcon.jsx';

const Main = (
  {
    navigation
  }
) => {
  return(
    <SafeAreaView style={ styles.container }>
      <View style={{alignItems: 'center'}}>
        <FlowButton/>
      </View>
      <AuthButton text='Sign Up' press={() => navigation.navigate('SignUpScreen')}/>
      <AuthButton text='Login' press={() => navigation.navigate('LoginScreen')}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#08082E'
  }
})

export default Main