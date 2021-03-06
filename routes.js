import React, { Component } from 'react';

import FlatList from './src/components/flatList.js'
import FirstSceen from './src/components/header2.js'
import SecondSceen from './src/components/firstScreen'
import Accordion from 'react-native-collapsible/Accordion';
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';
import App from './App'
import HomeSlider from './src/components/homeSlider2'
import Cart from './src/components/cartpage.js'
import TabViewExample from './src/components/tab.js'
import Checkout from './src/components/checkout.js'
import AddressRegistration from './src/components/addressRegistartion'
import ThankyouPage from './src/components/thankyouPage'
import AddNewReminder from './src/components/addReminder'
import GalleryImage from './src/components/galleryImage'
import Drawer from './src/components/drawerMain.js'
import { Router,Actions,Scene } from 'react-native-router-flux';

const Scenes = Actions.create(
   <Scene key='root'>
   <Scene key='home' hideNavBar component={App} initial/>
   <Scene key='flatList' hideNavBar component={FlatList}/>
     <Scene key='cart' hideNavBar component={Cart}/>


   </Scene>
);
export default Scenes;
