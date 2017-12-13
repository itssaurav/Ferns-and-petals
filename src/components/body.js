
import React from 'react';
import {
    TextInput,Image,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View, StyleSheet
} from 'react-native';
import {Card,SocialIcon} from 'react-native-elements'

export default class Login extends React.Component {
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

    render() {
        return (
            <View style={styles.container}>
              <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
              <Text>Login to get a personalized experience & quick checkout </Text>
                </View>
                <View style={{flex:2,flexDirection: 'column',justifyContent: 'space-between',width: 350,backgroundColor:'#fff',borderRadius:4,shadowColor: '#000', shadowOffset:{width:0,height:2},shadowOpacity:0.8,shadowRadius:2}}>
                <TextInput
                    style={{
                       flex:1.5,

                        borderColor:'#eee',
                        borderBottomWidth: 1,
                        paddingLeft:10,

                        marginBottom: 0,
                        borderBottom: 0,
                        borderTopLeftRadius:2

                    }}
                    placeholder="Email Id" underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({text})} onBlur={() => this.onBlur()}
                    onFocus={() => this.onFocus()}
                />
                <TextInput
                    style={{
                        flex:1.5,
                        borderColor: this.state.backgroundColor || '#ccc',
                        paddingLeft:10,
                        borderBottom: 0,
                        borderBottomLeftRadius:2

                    }}
                    placeholder="Ferns N Petals Password"
                    onChangeText={(password) => this.setState({password})} onBlur={() => this.onBlur()}

                />

               </View>
              <View style={{flex:2,justifyContent:'space-between',flexDirection: 'column', width: 350,marginTop:20}}>
                    <TouchableOpacity
                        style={{
                            flex:1,
                            backgroundColor: '#ff9212',
                            justifyContent: 'center',
                            alignItems: 'center',

                            borderRadius:4,

                        }}
                        onPress={this._onPressButton}>

                        <Text style={styles.fontLarge,styles.whiteFont}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{

                            flex:1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#999999',
                            marginTop:15,
                            borderRadius:4
                         }}>
                        <Text style={styles.fontLarge,styles.whiteFont}>LOGIN WITHOUT PASSWORD</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}><Text>OR LOGIN USING</Text></View>
                <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', width: 350}}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#007ad8',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:165,
                            borderRadius:4,
                            padding:18
                          }}
                        onPress={this._fbAuth}>
                        <Image style={{marginRight:10,marginTop:2}}
                          source={require('../../assets/images/facebook-logo.png')}
                        />
                        <Text style={styles.whiteFont}>FACEBOOK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#d80c14',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:165,
                            borderRadius:4,
                            padding:18
                          }}
                        onPress={this._signIn}>
                        <Image style={{marginRight:10,color:'#ffffff',marginTop:2}}
                          source={require('../../assets/images/google-plus.png')}
                        />
                      <Text style={styles.fontLarge,styles.whiteFont}>GOOGLE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.common}><Text style={styles.fontLarge,styles.FnP}>New to Ferns N Petals ? </Text></View>
                  <View style={styles.common}><Text style={styles.fontLarge,styles.register}>Register Now</Text></View>

                    <View style={styles.common}><Text>SKIP</Text></View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    welcome: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    red: {
        color: 'red',
    },
    common:{
      flex:1,justifyContent: 'center',alignItems: 'center'
    },
    fontLarge:
    {
      fontSize:22
    },
    whiteFont:
    {
      color:'#ffffff'
    },

    register:
    {
      color:'blue',fontSize:16
    }



});
