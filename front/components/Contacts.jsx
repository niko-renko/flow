import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Account from './Account.jsx';

const Main = (props) => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Account name={props.one} data={props.oneshare}/>
        <Account name={props.two} data={props.twoshare}/>
        <Account name={props.three} data={props.threeshare}/>
        <Account name={props.four} data={props.fourshare}/>
        <Account name={props.five} data={props.fiveshare}/>
        <Account name={props.six} data={props.sixshare}/>
        <Account name={props.seven} data={props.sevenshare}/>
        <Account name={props.eight} data={props.eightshare}/>
        <Account name={props.nine} data={props.nineshare}/>
      </ScrollView>
    </SafeAreaView>
    
  );
};

Main.defaultProps= {
  one:"Yash",
  oneshare:"YouTube, Github",
  two:"Ano",
  twoshare:"Twitter, Facebook",
  three:"Aneesh",
  threeshare:"Phone Number",
  four:"",
  fourshare:"",
  five:"",
  fiveshare:"",
  six:"",
  sixshare:"",
  seven:"",
  sevenshare:"",
  eight:"",
  eightshare:"",
  nine:"",
  nineshare:""
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08082E'
  }
})

export default Main