import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import { Image, ScrollView, Text ,View , StyleSheet,Button} from 'react-native';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel:'Screen1',
    drawerIcon:({tintColor})=>{
      return null;
    }
  }
  render(){
    return <View style={{flex:1,backgroundColor:'#000'}}><Text>Screen 1</Text><Button onPress={()=>this.props.navigation.navigate('DrawerOpen')} title='Open DrawerOpen'></Button></View>
  }
}
