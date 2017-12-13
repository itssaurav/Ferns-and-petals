import React, { Component } from 'react';
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';
import { Card , Header,Button } from 'react-native-elements';
export default class HeaderComponent extends Component {
  render() {
    return (
      <Header style = {styles.container}>
      <View style = {styles.redbox}>
        <Text>Saurav</Text>
      </View>
      <View style = {styles.bluebox}>
           <Text>Saurav</Text>
      </View>
      <View style = {styles.blackbox}>
          <Text>Saurav</Text>
      </View>
      </Header>
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
