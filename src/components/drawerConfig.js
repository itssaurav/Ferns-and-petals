import FirstSceen from './src/components/firstScreen'
import SecondSceen from './src/components/secondScreen'
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';
import {DrawerNavigator,DrawerItems} from 'react-navigation'
import DrawerContent from './drawerComponent';

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
export default DrawerExample;
