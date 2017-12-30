import React, { Component } from 'react';
import {Image, TextInput,ScrollView,FlatList, Text ,View , StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Header from './header'
const WIDTH=Dimensions.get('window').width;
export default class Gallery extends Component
{
  constructor()
  {
    super();
    this.state={
      data:require('../../assets/images/pastaveg_640x480.jpg')
    }
  }
  render()
  {
    console.log(this.state.data);
    return(
      <View style={{flex:1,minHeight:400}}>
        <View style={{flex:3}}>
        <Image source={this.state.data} resizeMode='contain'/>
        </View>
        <View style={{flex:2}}>
        <ScrollView horizontal={true} style={{width:WIDTH}}>

         <View style={{flex:1}}>
              <Image source={require('../../assets/images/pastaveg_640x480.jpg')} resizeMode='center'/>
         </View>
         <View style={{flex:1,}}>
              <Image source={require('../../assets/images/pastaveg_640x480.jpg')} resizeMode='center'/>
         </View>
         <View style={{flex:1}}>
              <Image source={require('../../assets/images/pastaveg_640x480.jpg')} resizeMode='center'/>
         </View>
           </ScrollView>
        </View>

      </View>
    )
  }
}
