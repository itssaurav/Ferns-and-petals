import React, { Component } from 'react';
import { Image, ScrollView, Text,View } from 'react-native';
import {Card} from 'react-native-elements';
import Header from './src/components/header'
import Login from './src/components/body'

export default class App extends Component {
  render() {
    return (
        <Login/>

    );
  }
}
