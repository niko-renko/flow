import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView
} from 'react-native';
import LoginForm from './LoginForm.jsx'

const Main = () => {
  return(
    <SafeAreaView style={ styles.container }>
      <Text style={{color: '#EEEEEE', fontSize: 30, marginBottom: 20}}>Login</Text>
      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#08082E',
    alignItems: 'center'
  }

})

export default Main