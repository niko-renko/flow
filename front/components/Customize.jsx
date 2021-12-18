import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Account from './ContactPoint.jsx';

const Main = () => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Account name='Phone'/>
        <Account name='Email'/>
        <Account name='Instagram'/>
        <Account name='Facebook'/>
        <Account name='Snapchat'/>
        <Account name='Phone number'/>
        <Account name='Youtube'/>
        <Account name='Twitter'/>
        <Account name='Address'/>
        <Account name='GitHub'/>
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08082E'
  }
})

export default Main