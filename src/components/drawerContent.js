import React,{ Component } from 'react';
import { Image, ScrollView, Text ,View , StyleSheet} from 'react-native';
import { Card , Header,Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import Accordion from 'react-native-collapsible/Accordion';
const width = Dimensions.get('window').width,
const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  }
];
export default class HeaderComponent extends Component {
  constructor(props)
  {
    super(props);
  }
  _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    )
  }
  render() {

    console.log(this.props);
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
    <View style={{flex:1,justifyContent: 'flex-start',alignItems: 'center',flexDirection:'column'}}>
    <View style={{maxHeight:100,backgroundColor:'#009E23',flexDirection:'row',flex:1,justifyContent: 'center',alignItems: 'center',borderBottomWidth:1,borderColor:'#eee'}}>
      <View style={{flex:1,justifyContent: 'center',alignItems:'flex-end'}}>
        <Image source={require('../../assets/images/logo-copy.png')} resizeMode='center' style={{marginRight:20}}/>
      </View>
      <View style={{flex:3,justifyContent: 'center',alignItems:'flex-start'}}>
          <Text style={{color:'#fff',fontWeight:'400'}}>Hi Hardeep</Text>
            <Text style={{color:'#fff',fontWeight:'400'}}>Two transaction away to go platinum</Text>
      </View>
    </View>
    <View style={{flex:1,justifyContent: 'center',backgroundColor:'#009E23',alignItems:'center',flexDirection:'row',maxHeight:50}}>

      <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
          <Text style={{color:'#fff',fontWeight:'600'}}>MY ACCOUNT</Text>
      </View>
      <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontWeight:'600'}}>TAKE ORDER</Text>
      </View>
      <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontWeight:'600'}}>HELP LINE</Text>
      </View>
    </View>

    <View style={{flex:1,justifyContent: 'flex-start',maxHeight:700,alignItems:'center',borderBottomWidth:1,borderColor:'#0606061c',paddingBottom:40,paddingTop:20}}>
        <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start',alignSelf:'stretch',marginBottom:20,marginLeft:20}}><Text>Explore</Text></View>

      <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',padding:20}}>
        <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
            <Text style={{fontSize:20,color:'#1BB866',fontWeight:'600'}}>BirthDay</Text>
        </View>
        <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../assets/images/caret-down.png')} resize='center' style={{width:10,height:10}}/>
        </View>
      </View>
      <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',padding:20}}>
        <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
            <Text style={{fontSize:20,color:'#1BB866',fontWeight:'600'}}>Aniversary</Text>
        </View>
        <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
            <Image source={require('../../assets/images/caret-down.png')} resize='center' style={{width:10,height:10}}/>
        </View>
      </View>
      <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',padding:20}}>
        <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
            <Text style={{fontSize:20,color:'#1BB866',fontWeight:'600'}}>Ocassion</Text>
        </View>
        <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
            <Image source={require('../../assets/images/caret-down.png')} resize='center' style={{width:10,height:10}}/>
        </View>
      </View>
      <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',padding:20}}>
        <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
            <Text style={{fontSize:20,color:'#1BB866',fontWeight:'600'}}>Gift Type</Text>
        </View>
        <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../assets/images/caret-down.png')} resize='center' style={{width:10,height:10}}/>
        </View>
      </View>
      <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',padding:20}}>
        <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
            <Text style={{fontSize:20,color:'#1BB866',fontWeight:'600'}}>Cities</Text>
        </View>
        <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../assets/images/caret-down.png')} resize='center' style={{width:10,height:10}}/>
        </View>
      </View>
      <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',padding:20}}>
        <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
            <Text style={{fontSize:20,color:'#1BB866',fontWeight:'600'}}>International</Text>
        </View>
        <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
            <Image source={require('../../assets/images/caret-down.png')} resize='center' style={{width:10,height:10}}/>
        </View>
      </View>
    </View>
    <View style={{flex:1,flexDirection:'column',justifyContent: 'flex-start',alignItems:'center'}}>



      <View style={{flex:1,justifyContent: 'flex-start',alignItems:'center',maxHeight:200,paddingTop:20,paddingBottom:20}}>

        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:2,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>Same day Delivery</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
                  <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center'style={{width:10,height:10}}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>BirthDay</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>Aniversary</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
            <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>Ocassion</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>Gift Type</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
          </View>
        </View>

          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:10}}>Copyright @2017 . All rights reserved</Text>
         </View>

      </View>
    </View>
    </View>

    );
  }
}
