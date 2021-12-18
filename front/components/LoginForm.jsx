import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    console.log(233);
    const response = fetch(
      'http://10.0.0.10:8000/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            email,
            password
          }
        )
      }
    );
    console.log(333);
    let a = await response.json();
    console.log(a);

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
        secureTextEntry={true} 
        placeholder='Password'
        placeholderTextColor='#b3b3b3'
        style = {styles.input}
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity style = {styles.submit} onPress={login}>
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

export default LoginForm