import React, { Component } from 'react';

import FlatList from './src/components/flatList.js'
import FirstSceen from './src/components/header2.js'
import SecondSceen from './src/components/firstScreen'
import Accordion from 'react-native-collapsible/Accordion';
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';
import {DrawerNavigator,DrawerItems} from 'react-navigation'
import DrawerContent from './src/components/drawerComponent';
import HomeSlider from './src/components/homeSlider2'
import Cart from './src/components/cartpage.js'
import TabViewExample from './src/components/tab.js'
import Checkout from './src/components/checkout.js'
import AddressRegistration from './src/components/addressRegistartion'
import ThankyouPage from './src/components/thankyouPage'
import AddNewReminder from './src/components/addReminder'
import GalleryImage from './src/components/galleryImage'



const DrawerExample = DrawerNavigator({
    First:{
      path:'/',
      screen:FirstSceen,
    },
    Second:{
      path:'/sent',
      screen:SecondSceen
    },
    Third:{
      path:'/sentw',
      screen:SecondSceen
    },
    Fourth:{
      path:'/sentw',
      screen:SecondSceen
    },
    Fifth:{
      path:'/sentw',
      screen:SecondSceen
    }
},{
  initialRouteName:"First",
  drawerPosition:'left',
  headerMode:'screen',
  drawerBackgroundColor:'#eee',
  drawerWidth:350,
  contentComponent:props=>{return(<DrawerContent {...props}/>)}
  }
);
export default class App extends Component{
  constructor(props)
  {
    super(props)
  }
  render()
  {
    return(
      <GalleryImage/>
    );
  }
}
