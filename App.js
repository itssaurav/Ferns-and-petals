import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import FlatList from './src/components/flatList.js'
import FirstSceen from './src/components/header2.js'
import SecondSceen from './src/components/firstScreen'
import Accordion from 'react-native-collapsible/Accordion';
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';

import HomeSlider from './src/components/homeSlider2'
import Cart from './src/components/cartpage.js'
import TabViewExample from './src/components/tab.js'
import Checkout from './src/components/checkout.js'
import AddressRegistration from './src/components/addressRegistartion'
import ThankyouPage from './src/components/thankyouPage'
import AddNewReminder from './src/components/addReminder'
import GalleryImage from './src/components/galleryImage'
import Drawer from './src/components/drawerMain.js'
import PropTypes from 'prop-types';
import {getOrder} from './src/Action'



class App extends Component{
  constructor(props)
  {
    super(props)
  }
  componentWillMount()
  {
    this.props.getOrder();
  }
  static propTypes = {
   routes: PropTypes.object,
 };
  render()
  {
   const {routes} = this.context;
    return(
      <Drawer data = 'checkout'/>
    );
  }
}
function mapStateToProps(state){
  console.log(state);
  return{
    dishdetails : state.data,

  };
}

export default connect(mapStateToProps,{getOrder})(App)
