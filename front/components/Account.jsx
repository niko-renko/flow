import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Account = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{props.name ? props.name+":" : ""}</Text>
      <Text>{'\n'}</Text>
      <Text style={styl.text}>{props.data}</Text>
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
    padding: 24,
    marginTop:10,

  },
  text: {
    fontSize: 23,
    fontWeight: 'Bold',
    color: '#EEEEEE'
  }
})

const styl = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#08082E',
    padding: 24,
    marginTop:10,

  },
  text: {
    fontSize: 13,
    fontWeight: 'Bold',
    color: '#EEEEEE'
  }
})

export default Account