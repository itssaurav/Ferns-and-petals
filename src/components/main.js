
import React, { Component } from 'react';
import { Image, ScrollView, Text ,View , StyleSheet,TouchableOpacity} from 'react-native';


export default class Control extends Component {
  constructor(props)
  {
    super(props);
  }
  render () {
    return (
      <TouchableOpacity
          style={{
              flexDirection: 'row',
              backgroundColor: '#4f6db1',
              justifyContent: 'center',
              alignItems: 'center',
              width:165,
              borderRadius:4,
              padding:16

            }}
          onPress={this.props.openDrawer}>

          <Text>FACEBOOK</Text>
      </TouchableOpacity>
    )
  }
}
