import React, { Component } from 'react';
import {Image, TextInput,ScrollView,FlatList, Text ,View , StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Header from './header'

export default class AddNewReminder extends Component{
  render()
  {
    return(
      <View style={{flex:1,paddingVertical:20,backgroundColor:'#eee'}}>
         <View style={{flex:1,maxHeight:200,backgroundColor:'#fff'}}>
              <View style={{flex:1,borderColor:'#eee',borderWidth:1}}>
                <TextInput underlineColorAndroid='none'  placeholder='*Name'/>
              </View>
              <View style={{flex:1,borderColor:'#eee',borderWidth:1}}>
                  <TextInput style={{flex:1}} underlineColorAndroid='none' placeholder='*Name'/>
              </View>
              <View style={{flex:1,borderColor:'#eee',borderWidth:1}}>
                       <TextInput style={{flex:1}} underlineColorAndroid='none'  placeholder='*Name'/>
              </View>
              <View style={{flex:1,borderColor:'#eee',borderWidth:1}}>
                      <TextInput style={{flex:1}} underlineColorAndroid='none' placeholder='*Name'/>
              </View>
        </View>

      </View>
    )
  }
}
