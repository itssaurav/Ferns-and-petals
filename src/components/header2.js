import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import { Image, ScrollView, Text ,View , StyleSheet,Button,TouchableOpacity} from 'react-native';

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel:'Screen1',
    drawerIcon:({tintColor})=>{
      return null;
    }
  }
  render(){
    return <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-start',maxHeight:50,flexDirection:'row'}}>
    <View style={{flex:4,justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-start'}} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}><Image source={require('../../assets/images/11.png')} resizeMode='center' /></TouchableOpacity>
        </View>
        <View style={{flex:4,justifyContent:'flex-start',alignItems:'flex-start'}} >
                <Image source={require('../../assets/images/logo.png')} resizeMode='center' style={{width:200,height:50}}/>
        </View>

    </View>
   <View style={{flex:2,justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
    <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
        <Image source={require('../../assets/images/10.png')} resizeMode='center' />
    </View>
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>

            <Image source={require('../../assets/images/9.png')} resizeMode='center' />
    </View>
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>

            <Image source={require('../../assets/images/dropdown.png')} resizeMode='center' />
    </View>
  </View>
    </View>


  }
}
