import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import SvgQRCode from 'react-native-qrcode-svg';
//import CustomQRCodes from './components/CustomQRCodes';

function LogoFromFile() {
  let logoFromFile = require('../assets/icon.jpg');

  
  return <SvgQRCode
      value="Just some string value"
      size={200}
      color='#FFF'
      backgroundColor='transparent'
      logo={ logoFromFile }
      logoSize={120}
      logoBackgroundColor='transparent'
      
    />;
}

export default function QRGenerator() {
  return (
    <View style={styles.container}>
      <LogoFromFile style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#08082E',
  }
});