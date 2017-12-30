import React, { Component } from 'react';
import { Image, ScrollView, Text ,View , StyleSheet,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation';
import Swiper from 'react-native-swiper'
export default class DrawerContent extends Component{
  constructor()
  {
    super();
    this.state={
      move:0
    }
  }
 move(){
    this.setState({
      move:this.state.move-50
    })
 }
 moveRight(){
   this.setState({
     move:this.state.move+50
   })
 }
  render()
  {
    console.log(this.state.move);
  return(
    <View style={styles.wrapper}>
    <Swiper  showsButtons={true} dotStyle={{display:'none'}} activeDotStyle={{display:'none'}} removeClippedSubviews='false' showsHorizontalScrollIndicator='true'>
      <View style={[styles.slide1,{backgrounddColor:'red'}]}>
        <View style={[styles.slideInner,{backgroundColor:'blue'}]}>
             <Text style={styles.text}>Hello Swiper1</Text>
        </View>

      </View>
      <View style={[styles.slideInner,{backgrounddColor:'yellow'}]}>
        <View style={[styles.slideInner,{backgroundColor:'blue'}]}>
             <Text style={styles.text}>Hello Swiper2</Text>
        </View>

      </View>
      <View style={[styles.slideInner,{backgrounddColor:'blue'}]}>

        <View style={[styles.slideInner,{backgroundColor:'green'}]}>
             <Text style={styles.text}>Hello Swiper</Text>
        </View>
      </View>
    </Swiper>
    </View>
   )
  }
 }
 var styles = StyleSheet.create({
  wrapper: {
    flex:1,
    width:400,
    maxHeight:100,
    overflow:'visible',

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
  }
})
