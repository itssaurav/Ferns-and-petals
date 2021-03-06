import React, { Component } from 'react';
import  {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-material-dropdown';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Feather'
import PropTypes from 'prop-types';
const width = Dimensions.get('window').width;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  title: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {

    paddingTop: 20,
    paddingBottom:20,
    paddingRight:20,
    paddingLeft:10

  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    color:'#1BB866',
    marginTop:-20,
    height:50
  },
  content: {
    padding: 20,

  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
  inactive: {
        backgroundColor: '#fff'
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

export default class ControlPanel extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      activeSection: false,
      collapsed: true,
    };
  }
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };
  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    return (
      <View duration={400} style={[styles.header,isActive ? styles.active : styles.inactive,{flex:1,maxHeight:50,flexDirection:'row',paddingLeft:20,paddingRight:30}]} transition="backgroundColor">
           <Text style={[styles.headerText,{flex:3,padding:10,maxHeight:40}]}>{section.title}</Text>
            <Image style={{flex:1}} source={require('../../assets/images/caret-down.png')} resize='center' style={{width:10,height:10}}/>

      </View>



    );
  }
  _check()
  {
     alert('i m active');
  }
  _renderContent(section, i, isActive) {
    return (
      <TouchableHighlight>
      <View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive,{paddingLeft:30,paddingRight:30}]} transition="backgroundColor">
        <Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Text>
      </View>
      </TouchableHighlight>
    );
  }
  render() {
    let {closeDrawer} = this.props;
    const CONTENT = [
      {
        title: 'First',
        content: 'BACON_IPSUM',
      },
      {
        title: 'Second',
        content: 'BACON_IPSUM',
      },
      {
        title: 'Third',
        content: 'BACON_IPSUM',
      },
      {
        title: 'Fourth',
        content: 'BACON_IPSUM',
      },
      {
        title: 'Fifth',
        content: 'BACON_IPSUM',
      },
    ];
    return (

      <View style={{flex:1,justifyContent: 'flex-start',alignItems: 'center',flexDirection:'column',backgroundColor:'#fff'}}>
      <View style={{maxHeight:80,backgroundColor:'#009E23',flexDirection:'row',flex:1,justifyContent: 'center',alignItems: 'center',borderBottomWidth:1,borderColor:'#eee'}}>
        <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start',paddingLeft:20}}>
          <View style={{padding:10,backgroundColor:'#fff',borderRadius:30}}>
            <Icon name='user' size={20} color='#000'/>
          </View>
        </View>
        <View style={{flex:5,justifyContent: 'center',alignItems:'flex-start'}}>
            <Text style={{color:'#fff',fontWeight:'600',fontSize:16}}>Hi Hardeep</Text>

        </View>
      </View>
      <View style={{flex:1,justifyContent: 'center',backgroundColor:'#009E23',alignItems:'center',flexDirection:'row',maxHeight:50,paddingLeft:20,paddingRight:20}}>

        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontWeight:'600',fontSize:14}}>MY ACCOUNT</Text>
        </View>
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
              <Text style={{color:'#fff',fontWeight:'600',fontSize:14}}>TAKE ORDER</Text>
        </View>
        <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
              <Text style={{color:'#fff',fontWeight:'600',fontSize:14}}>HELP LINE</Text>
        </View>
      </View>
        <ScrollView>
      <View style={{flex:1,borderBottomWidth:1,borderColor:'#0606061c',paddingTop:20}}>

            <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',paddingLeft:30,paddingBottom:20}}><Text style={{fontSize:12}}>Explore</Text></View>

        <Accordion style={{flex:1,flexDirection:'column',width:width-70}}
          activeSection={this.state.activeSection}
          sections={CONTENT}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />



      </View>

      <View style={{flex:4,flexDirection:'column',justifyContent: 'flex-start',alignItems:'center'}}>



        <View style={{flex:1,justifyContent: 'flex-start',alignItems:'center',paddingTop:20,paddingBottom:20,paddingLeft:30,paddingRight:30}}>

          <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:2,justifyContent: 'center',alignItems:'flex-start'}}>
                <Text style={{fontSize:12}}>Same day Delivery</Text>
            </View>
            <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
                    <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center'style={{width:10,height:10}}/>
            </View>
          </View>
          <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
                <Text style={{fontSize:12}}>BirthDay</Text>
            </View>
            <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
                <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
            </View>
          </View>
          <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
                <Text style={{fontSize:12}}>Aniversary</Text>
            </View>
            <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
            </View>
          </View>
          <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
                <Text style={{fontSize:12}}>Ocassion</Text>
            </View>
            <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
                <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
            </View>
          </View>
          <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center'}}>
            <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
                <Text style={{fontSize:12}}>Gift Type</Text>
            </View>
            <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
                <Image source={require('../../assets/images/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
            </View>
          </View>

          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start',flexDirection:'row',paddingTop:20}}>
            <View style={{flex:2}}>
                <Text style={{fontSize:10}}>Copyright @2017 . All rights reserved</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
              <Text style={{fontSize:10}}>Copyright @2017 </Text>
             </View>
        </View>

        </View>
      </View>
      </ScrollView>
      </View>


    )
  }
}
