import React, { Component } from 'react';
import { Button } from 'react-native';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
import {
  TextInput,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View, StyleSheet,
  Picker
} from 'react-native';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', password: ''};
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton() {
    if (this.state.text === 'sam' && this.state.password === "123") {
      Actions.Home();
    } else {
      ToastAndroid.show('Username / password wrong', ToastAndroid.SHORT);
    }
  }

  onFocus() {
    this.setState({
      backgroundColor: 'green'
    })
  }

  onBlur() {
    this.setState({
      backgroundColor: '#ededed'
    }
  )
}
_fbAuth(){
  LoginManager.logInWithReadPermissions(['public_profile']).then(
    function(result) {
      console.log(result);
      if (result.isCancelled) {
        ToastAndroid.show('Login cancelled',ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Login success with permissions: ' +result.grantedPermissions.toString(),ToastAndroid.SHORT);
        //ToastAndroid.show('Login success with permissions:' ,ToastAndroid.SHORT);
      }
    },
    function(error) {
      ToastAndroid.show('Login fail with error: ' + error,ToastAndroid.SHORT);
    }
  );
}
_signIn(){
  GoogleSignin.signIn()
  .then((user) => {
    console.log(user);
    this.setState({user: user});
  })
  .catch((err) => {
    console.log('WRONG SIGNIN', err);
  })
  .done();
}


render() {
  return (
    <View>
      <View style = {[styles.text_hold]}>
        <Text>Create FNP account</Text>
      </View>
      <View style = {styles.mainHolder}>
        <View style = {[styles.box_container]}>
          <TextInput underlineColorAndroid='transparent' placeholder="Name" style={{
            height: 50,
            borderRadius:5,
            paddingLeft: 15,
            backgroundColor:'#fff',
            borderColor: 'gray',
            borderWidth: 0.5}}/>
          </View>
          <View style = {styles.number_holder}>
            <Picker
              style={{
                height: 50,
                flex: 1,
                borderRadius:5,
                paddingLeft: 15,
                backgroundColor:'#fff',
                borderColor: 'gray',
                borderWidth: 0.5,
              }}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <TextInput underlineColorAndroid='transparent' placeholder="Mobile no" style={{
              height: 50,
              borderRadius:5,
              flex: 2,
              paddingLeft: 15,
              backgroundColor:'#fff',
              borderColor: 'gray',
              marginLeft: 10,
              borderWidth: 0.5}}/>
            </View>
            <View style= {styles.email}>
              <TextInput underlineColorAndroid='transparent' placeholder="Email" style={{
                height: 50,
                borderRadius:5,
                paddingLeft: 15,
                backgroundColor:'#fff',
                borderColor: 'gray',
                borderWidth: 0.5}}/>
              </View>
              <View style= {styles.email}>
                <TextInput underlineColorAndroid='transparent' placeholder="* Create password" style={{
                  height: 50,
                  borderRadius:5,
                  paddingLeft: 15,
                  backgroundColor:'#fff',
                  borderColor: 'gray',
                  borderWidth: 0.5}}/>
                </View>
                <View>
                  <TouchableOpacity style={{ height: 50,
                    marginTop: 10,
                    backgroundColor: '#ff9212',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style = {{
                    color: '#fff',
                    fontSize: 20}}>REGISTER</Text>
                  </TouchableOpacity>
                </View>
                <View style = {{
                  alignItems: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20
                }}>
                <Text style = {{color: '#666666', fontSize: 18}}>Existing user?</Text>
                <Text style = {{color: '#2179d0',
                  marginLeft: 10,
                  fontSize: 18,
                  fontWeignt: '500'}}>LOGIN</Text>
                </View>
              </View>
              <View>
                  <View style = {{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10
                  }}>
                    <Text style = {{
                      color: '#666666',
                    }}>OR REGISTER USING</Text>
                  </View>
                  <View style = {styles.socialHolder}>
                      <View style = {{flex : 1}}>
                      <TouchableOpacity style={{ height: 50,
                        marginTop: 10,
                        backgroundColor: '#4e6cb6',
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style = {{
                        color: '#fff',
                        fontSize: 20}}>FACEBOOK</Text>
                      </TouchableOpacity>
                    </View>
                    <View style = {{flex : 1, marginLeft: 10}}>
                      <TouchableOpacity style={{ height: 50,
                        marginTop: 10,
                        backgroundColor: '#d83f33',
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome> */}
                      <Text style = {{
                        color: '#fff',
                        fontSize: 20}}>GOOGLE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </View>
            </View>
        );
      }
    }
    const styles = StyleSheet.create({
      number_holder : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginTop: 10,padding:20

      },
      email : {
        marginTop: 10
      },
      mainHolder : {
        backgroundColor : '#fff',
        padding: 20,
        paddingBottom: 30,
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: {
          width: 10,
          height: 20
        }
      },
      socialHolder : {
        flexDirection : 'row',
        justifyContent : 'space-around'
      }
    });
