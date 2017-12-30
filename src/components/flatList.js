import React, { Component } from "react";
import { Image,View, Text, FlatList ,Dimensions,StyleSheet} from "react-native";

import LinearGradient from 'react-native-linear-gradient';
const width=Dimensions.get('window').width;
class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {

      loading: false,
      data: [{
        name:'saurav',
        text:'Genious',
        color:'yellow',
        img:'../../assets/images/birthday.png'
      },
      {
        name:'gaurav',
        text:'GEnious',
          img:'../../assets/images/cake.png',
            color:'red'
      },
      {
        name:'parth',
        text:'Genious',
        img:'../../assets/images/flower.png',
        color:'blue'
      },
      {
        name:'sangram',
        text:'genious',
        img:'../../assets/images/gift.png',
        color:'green'
      },
      {
        name:'gaurav',
        text:'Genious',
        color:'yellow'
      },
      {
        name:'parth',
        text:'Genious',
        color:'red'
      },
      {
        name:'sangram',
        text:'genious',
        color:'yellow'
      }

    ],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      enable:true
    };
  }

render() {
  var ITEM_HEIGHT=80;
    console.log(this.props);
    return (

       <View style={{flex:1,width:width,backgroundColor:'#fff',maxHeight:70,marginTop:10}}>
        <FlatList style={{flex:1}} horizontal={true} showsHorizontalScrollIndicator={false} onScrollEnd={()=>{console.log('end Reached') }}  onEndReachedThreshold={300}
          data={this.state.data}
          getItemLayout={(data, index) => (
         {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
        )}
          renderItem={({ item }) => (
          <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:4,width:80,justifyContent:'center',alignItems:'center',backgroundColor:item.color,marginLeft:5,maxHeight:40}}>

                <Image source={require('../../assets/images/cake.png')} resizeMode='center' style={{width:20, height:30}} />

           </View>
           <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
             <Text>{item.text}</Text>
           </View>
           </View>
          )}
          onEndReached = {(ITEM_HEIGHT)=>{this.setState({ enable:false})}}
          {...this.props}

        />

      <LinearGradient colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,1)']} style={styles.linearGradient} start={{ x: 0, y: 1 }}
      end={{ x:1, y: 1 }}>

      </LinearGradient>

      {this.state.enable?<View style={{position:'absolute',top:20,fontSize:60,right:10,flex:1}}><Image source={require('../../assets/images/right-arrow.png')}/>
  </View>:null}
        </View>


    );
  }
}

  var styles = StyleSheet.create({
   wrapper: {
     flex:1,
     flexDirection:'row',
     width:600,
     maxHeight:100,
     overflow:'visible',
     position:'relative'
 },
   slide1: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection:'row',
     overflow:'visible',

   },
   slide2: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#97CAE5',
     flexDirection:'row',

     overflow:'visible',


   },
   slide3: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#92BBD9',
     flexDirection:'row',
     overflow:'visible'

   },
  slideInner:{
     flex:1,
     height:60,
     alignItems:'center',
     justifyContent:'center',
     marginLeft:10,
     flexDirection:'row',
     width:50
   },
   linearGradient:{
     position:'absolute',
     right:0,
     height:100,
     width:50
   }
 })



export default FlatListDemo;
