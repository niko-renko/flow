import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const AuthButton = ({ text, press }) => {
  return(
    <View>
      <TouchableOpacity style={ styles.container } onPress={press}>
        <Text style={ styles.text }>{ text }</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 200,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 30
  },
  text: {
    color: '#EEEEEE',
    fontSize: 20
  }
})

export default AuthButton