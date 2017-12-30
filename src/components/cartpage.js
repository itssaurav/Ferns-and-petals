import React, { Component } from 'react';
import {Image, ScrollView,FlatList, Text ,View , StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Header from './header'
import Icon from 'react-native-vector-icons/MaterialIcons'
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
export default class Cart extends Component{
  render()
  {
    return(

         <View style={{flex:1,height:HEIGHT}}>
          <Header/>
             <ScrollView>
            <View style={{flex:1,flexDirection:'column'}}>
              <View style={{flex:1,marginTop:20,minHeight:330}}>
                <View style={{flex:1,flexDirection:'row',maxHeight:90,borderBottomWidth:2,borderBottomColor:'#CDCDCD',paddingBottom:10,backgroundColor:'#F8F8F8',paddingRight:20}}>

                    <View style={{flex:1.5,justifyContent:'center',alignItems:'flex-end'}}>
                         <Image source={require('../../assets/images/engimatic.jpg')} resizeMode='center' style={{width:100,height:70}}/>
                    </View>
                    <View style={{flex:3,flexDirection:'column'}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                               <Text>Engimatic 8 Red Roses</Text>
                      </View>
                      <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                                <Text>Small</Text>
                      </View>
                      <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                                 <Text>Qty 1</Text>
                      </View>


                    </View>
                    <View style={{flex:1}}>
                      <View style={{flex:1,alignItems:'flex-end'}}>
                          <Text style={{color:'#EF000F'}}>₹ 599</Text>
                      </View>
                      <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>
                        <Icon name="delete" size={20} />
                      </View>
                    </View>

               </View>
               <View style={{flex:1,flexDirection:'row',maxHeight:100,paddingTop:20,borderBottomWidth:1,borderBottomColor:'#CDCDCD',paddingBottom:10,paddingRight:20}}>
                 <View style={{flex:3,alignItems:'center'}}><Text style={{fontSize:15,fontWeight:'400'}}>DELIVERY DATE</Text></View>
                 <View style={{flex:3}}>
                   <View style={{flex:1}}><Text style={{fontSize:15,fontWeight:'500'}}>2 OCT,2017</Text></View>
                   <View style={{flex:1.5}}><Text style={{fontSize:13}}>Midnight Delivery</Text>
                   <Text style={{fontSize:13}}>11:00 PM -11:59 PM</Text></View></View>
                 <View style={{flex:1}}><Text style={{padding:4,paddingLeft:5,borderRadius:20,color:'#fff',backgroundColor:'#EF000F',justifyContent:'center',alignItems:'center'}}>₹ 250</Text></View>
                 <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}><Icon name="keyboard-arrow-right" size={30} style={{marginLeft:28}} /></View>
               </View>
                <View style={{flex:1,flexDirection:'row',maxHeight:130,paddingTop:20,paddingBottom:10,paddingRight:20}}>
                   <View style={{flex:1.1,alignItems:'center'}}><Text style={{fontSize:15,fontWeight:'400'}}>PRICE DETAILS</Text></View>
                   <View style={{flex:1.9,flexDirection:'column'}}>

                     <View style={{flex:1,flexDirection:'row'}}>
                       <View style={{flex:1}}><Text>Subtotal</Text></View>
                       <View style={{flex:1,alignItems:'flex-end'}}><Text>₹ 599</Text></View>
                     </View>

                     <View style={{flex:1,flexDirection:'row',alignItem:'flex-start',marginBottom:10}}>
                       <View style={{flex:1}}><Text>Shipping</Text></View>
                       <View style={{flex:1,alignItems:'flex-end'}}><Text>₹ 250</Text></View>
                     </View>
                     <View style={{flex:2,flexDirection:'row',alignItems:'center',borderBottomColor:'#CDCDCD',borderTopColor:'#CDCDCD',borderTopWidth:1,borderBottomWidth:1}}>
                       <View style={{flex:1}}><Text style={{fontSize:16,fontWeight:'500'}}>TOTAL</Text></View>
                       <View style={{flex:1,alignItems:'flex-end'}}><Text style={{color:'#EF000F',fontSize:16}}>₹ 360</Text></View>
                     </View>
                   </View>

                </View>


             </View>
           </View>
           </ScrollView>
     <View style={{width:WIDTH,position:'absolute',bottom:0}}>
       <TouchableOpacity style = {{flex: 1, flexDirection: 'row', backgroundColor: '#f19215', padding: 10, borderRadius: 2, paddingRight: 20, paddingLeft: 20}}>
       <Text style = {{flex:1,color: '#fff',textAlign:'center', paddingTop:0, fontSize: 18}}>PROCEED TO CHECKOUT</Text>


      </TouchableOpacity>
     </View>
    </View>

    )
  }
 }
