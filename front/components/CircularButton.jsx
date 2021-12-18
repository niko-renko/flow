import React from 'react';

import {
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const CircularButton = (
  {
    image,
    pressHandler
  }
) => {
  return (
    <TouchableOpacity style={styles.button} onPress={pressHandler}>
      <Image style={styles.icon} source={image}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(
  {
    button: {
      width: 50,
      height: 50,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
    },
    icon: {
      width: 25,
      height: 25
    }
  }
);

export default CircularButton;