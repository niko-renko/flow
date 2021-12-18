import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Switch } from 'react-native';

const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <View style={styles.container}>
      <Switch
        style={{marginTop:10,alignItems:'right'}}
        trackColor={{ false: "#767577", true: "#90ee90" }}
        thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
  }
})

export default Toggle