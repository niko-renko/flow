import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Toggle from './Toggle.jsx';

const Account = ({ name }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Toggle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#08082E',
    borderBottomWidth: '2px',
    borderBottomColor: '#67DAF9'
  },
  text: {
    fontSize: 25,
    fontWeight: 'Bold',
    color: '#EEEEEE'
  }
})

export default Account