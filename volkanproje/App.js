/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Header from './src/components/Header';
import Liste from './src/components/Liste';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const App: () => React$Node = () => {

  return (



      <View style={{ flex:1}}>
       <Header headerText={'Ornek proje'} />
       <Liste />

      </View>





  );
};

const styles = StyleSheet.create({

});


export default App;
