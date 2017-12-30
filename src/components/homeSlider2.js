import React, { Component } from 'react';
import {Image, ScrollView,FlatList, Text ,View , StyleSheet,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation';
import Swiper from 'react-native-swiper';
import Display from 'react-native-display';
import LinearGradient from 'react-native-linear-gradient';
export default class DrawerContent extends Component{
   constructor()
   {
     super();
     this.state={
       enable:true
     }
   }

  render()
  {
      console.log(this.state.show);
  return(

    <View style={{flex:1}}>


    <ScrollView horizontal={true}  indicatorStyle='white'  onScroll={()=>{this.setState({enable:false})}}>
     <View style={styles.wrapper}>

        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red',marginLeft:10}}><Text>Text1</Text></View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'pink',marginLeft:10}}><Text>Text1</Text></View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'blue',marginLeft:10}}><Text>Text1</Text></View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red',marginLeft:10}}><Text>Text1</Text></View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'blue',marginLeft:10}}><Text>Text1</Text></View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'green',marginLeft:10}}><Text>Text1</Text></View>

    </View>

    </ScrollView>

    <LinearGradient colors={['#f3f3f3e3', '#f3f3f3a8', '#f3f3f352']} style={styles.linearGradient} start={{ x: 0, y: 1 }}
  end={{ x: 1, y: 1 }}>

  </LinearGradient>

  {this.state.enable?<View style={{position:'absolute',top:80,fontSize:60,right:10}}><Image source={require('../../assets/images/right-arrow.png')}/>
   </View>:null }
    </View>

   )
  }
 }
 var styles = StyleSheet.create({
  wrapper: {
    flex:1,
    flexDirection:'row',
    width:600,
    maxHeight:100,
    overflow:'visible',
    position:'relative'
},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    overflow:'visible',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    flexDirection:'row',

    overflow:'visible',


  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    flexDirection:'row',
    overflow:'visible'

  },
 slideInner:{
    flex:1,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    flexDirection:'row',
    width:50
  },
  linearGradient:{
    position:'absolute',
    right:0,
    height:100,
    width:50


  }
})
