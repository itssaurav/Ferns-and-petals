import FirstSceen from './src/components/header2.js'
import SecondSceen from './src/components/secondScreen'
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';
import {DrawerNavigator,DrawerItems} from 'react-navigation'
import DrawerContent from './src/components/drawer';


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
  drawerBackgroundColor:'#ffffff',
  drawerWidth:350,
  contentComponent:<DrawerContent ...props/>,


  });
export default DrawerExample;
