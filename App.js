import React, { Component } from 'react';
import { Image, ScrollView, Text,View } from 'react-native';
import {Card} from 'react-native-elements';
import Header from './src/components/header'
import Login from './src/components/registration'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <Header/>
        <Login/>
      </View>

    );
  }
}
