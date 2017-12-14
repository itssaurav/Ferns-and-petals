import React, { Component } from 'react';
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';
import { Card , Header,Button } from 'react-native-elements';
export default class HeaderComponent extends Component {
  render() {
    return (
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',maxHeight:50,flexDirection:'row'}}>
    <View style={{flex:1.2,justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
        <View style={{flex:2,justifyContent: 'center',alignItems: 'center'}}>
                <Image source={require('../../assets/images/back.png')} />
        </View>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                <Image source={require('../../assets/images/logo-copy.png')} resizeMode='center' style={{marginRight:20}}/>
        </View>
        <View style={{flex:3,justifyContent: 'center',alignItems:'center'}}>
              <Text>LOGIN/REGISTER</Text>
        </View>
    </View>
      <View style={{flex:1,justifyContent: 'flex-end',alignItems: 'center'}}>
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <Image source={require('../../assets/images/dropdown.png')} resizeMode='center' style={{marginLeft:100}}/>
    </View>
  </View>
    </View>

    );
  }
}
const styles = StyleSheet.create ({
   container: {

   },
   redbox: {


   },
   bluebox: {

   },
   blackbox: {

   },
})
