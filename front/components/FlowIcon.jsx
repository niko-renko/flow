import React from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import icon from '../assets/icon.jpg';

const FlowButton = () => {
  return (
    <View style={styles.button}>
      <Image style={styles.icon} source={icon}/>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    button: {
      height: 150,
      width: 150,
      borderRadius: 100,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: '2px',
      borderColor: '#67DAF9',
      marginBottom: 20
    },
    icon: {
      height: 100,
      width: 100
    }
  }
);

export default FlowButton;