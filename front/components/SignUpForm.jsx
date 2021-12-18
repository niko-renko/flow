import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Keyboard, AsyncStorage } from 'react-native';

//const NodeRSA = require('node-rsa');

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    const key = Math.random();

    // await AsyncStorage.setItem(
    //   'privatekey',
    //   key
    // );
      
    const response = await fetch(
      'http://10.0.0.10:8000/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            publicKey: key,
            username,
            email,
            password
          }
        )
      }
    );

    return;
  };

  return(
    <View>
      <TextInput 
        placeholder='Email'
        placeholderTextColor='#b3b3b3'
        underlineColorAndroid='transparent'
        style = {styles.input}
        onChangeText={email => setEmail(email)}
      />
      <TextInput 
        placeholder='Username'
        placeholderTextColor='#b3b3b3'
        underlineColorAndroid='transparent'
        style = {styles.input}
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        secureTextEntry={true} 
        placeholder='Password'
        placeholderTextColor='#b3b3b3'
        style = {styles.input}
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity style = {styles.submit} onPress={register}>
        <Text style = {styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#EEEEEE',
    padding: 10,
    borderWidth: '1px',
    borderColor: '#67DAF9',
    borderRadius: 50,
    marginBottom: 10,
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    color: '#EEEEEE',
    textAlign: 'center',
    fontSize: 20
  }
})

export default Form