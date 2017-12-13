
import React from 'react';
import {
    TextInput,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View, StyleSheet
} from 'react-native';
import {Card} from 'react-native-elements'
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
              <Text style={{marginTop:15,marginBottom:10,fontFamily: 'sans-serif-bold',fontSize:14}}>Login to get a personalized experience & quick checkout </Text>
                <View style={{flexDirection: 'column',height: 100,justifyContent: 'space-between',width: 350,marginTop:10,marginBottom:15,backgroundColor:'#fff',borderRadius:4,shadowColor: '#000', shadowOffset:{width:0,height:2},shadowOpacity:0.8,shadowRadius:2}}>
                <TextInput
                    style={{

                        borderColor:'#eee',
                        borderBottomWidth: 1,
                        padding:10,

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

                        borderColor: this.state.backgroundColor || '#ccc',
                        padding:10,
                        marginBottom: 20,
                        borderBottom: 0,
                        borderBottomLeftRadius:2

                    }}
                    placeholder="Ferns N Petals Password"
                    onChangeText={(password) => this.setState({password})} onBlur={() => this.onBlur()}

                />

               </View>
              <View style={{flexDirection: 'column', height: 140, width: 350}}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            backgroundColor: '#ff9212',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop:10,
                            marginBottom:10,
                            borderRadius:4,

                        }}
                        onPress={this._onPressButton}>
                        <Text style={styles.whiteFont}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            backgroundColor: '#999999',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop:10,
                            borderRadius:4,
                            fontSize:18

                        }}>
                        <Text style={styles.whiteFont}>LOGIN WITHOUT PASSWORD</Text>
                    </TouchableOpacity>
                </View>
                 <Text style={styles.whiteFontText}>OR LOGIN USING</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 50, width: 350}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#007ad8',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:160,
                            borderRadius:4,
                          }}
                        onPress={this._fbAuth}>
                        <Text style={styles.whiteFont}>FACEBOOK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#d80c14',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width:160,
                            borderRadius:4,
                          }}
                        onPress={this._signIn}>
                        <Text style={styles.whiteFont}>GOOGLE</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginTop:40}}>New to Ferns N Petals ? </Text>
                  <Text style={{marginTop:20,color:'blue'}}>Register Now</Text>
                  <View style={{marginTop:100}}>
                    <Text >Skip</Text>
                  </View>
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
    whiteFont: {
        color: 'white',fontSize:18
    },
    whiteFontText: {
      marginTop:20,
      marginBottom:20,
      fontSize:12
    }

});
