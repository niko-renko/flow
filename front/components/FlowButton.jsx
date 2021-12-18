import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import icon from '../assets/icon.jpg';

const FlowButton = ({ press }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={press}>
      <Image style={styles.icon} source={icon}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(
  {
    button: {
      height: 200,
      width: 200,
      borderRadius: 100,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: '2px',
      borderColor: '#67DAF9'
    },
    icon: {
      height: 150,
      width: 150
    }
  }
);

export default FlowButton;