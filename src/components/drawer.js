
import React, { Component } from 'react';
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation'
export default class DrawerContent extends Component{

  render()
  {
return(
      <View
          style={{
          backgroundColor: '#f50057',
          height: 140,
          alignItems: 'center',
          justifyContent: 'center',
          }}
          >
          <Text style={{ color: 'white', fontSize: 30 }}>
          Header


          <DrawerItems {...props} />
       </View>
   )
  }
 }
