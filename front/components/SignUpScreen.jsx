import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ScrollView
} from 'react-native';
import Form from './SignUpForm.jsx'

const Main = () => {
  return(
    <SafeAreaView style={ styles.container }>
      <Text style={{color: '#EEEEEE', fontSize: 30, marginBottom: 20}}>Sign Up</Text>
      <Form />
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