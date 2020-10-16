import React, {Component} from 'react';
import{Text} from 'react-native';
import axios from 'axios';
import Detay from './Detay';



import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

class Liste extends Component{
  state={data:[]};
 componentDidMount(){
   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   .then(response=>this.setState({data: response.data}) );
 }
 renderData(){
   return this.state.data.map((responseData,Id) =>
   <Detay key={Id} data={responseData} />
 );
 }

  render(){
    return(
      <ScrollView style={{marginTop:5}}>
        {this.renderData()}
      </ScrollView>
    );

  }
}

export default Liste;
