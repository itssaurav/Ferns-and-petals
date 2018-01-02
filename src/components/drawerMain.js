import React, { Component } from 'react';
import {


  StyleSheet,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer'

import ControlPanel from './ControlPanel'
import Main from './Main'

export default class App extends Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
      type="overlay"
      content={<ControlPanel />}
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
    
        >
        <Main/>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  }
})
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
