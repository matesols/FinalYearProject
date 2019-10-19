import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../css/LoginStyle';
import LinearGredient from 'react-native-linear-gradient';
import logo from '../images/educationFolder.png';
import cell from '../images/cell.png';
import password from '../images/password.png';


export default class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cell:'',
        password:''
    };
  };

  static navigationOptions = {
    header:null,
  };

  logIn = ()=>{
    this.props.navigation.navigate('Dashboard');  
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.mainScreen}>
          <LinearGredient colors={['#00B7A5','#01919A','#02628C']} style={Styles.header}>
            <Text style={Styles.logoText}>B.I.I.T</Text>
            <Image source={logo} style={Styles.logo}/>
            <Text style={Styles.logoHeading}>Folders Automation System</Text>
          </LinearGredient>
          <View style={Styles.wrapper}>
              <Text style={Styles.heading}>LogIn</Text>
              <View style={Styles.textParent}>
                  <Image source={cell}/> 
                  <TextInput placeholder="Registered Cell"/>
              </View>
              <View style={Styles.textParent}>
                  <Image source={password}/> 
                  <TextInput placeholder="Password"/>
              </View>
              <TouchableOpacity onPress={this.logIn}>
                <LinearGredient colors={['#00B7A5','#01919A','#02628C']} style={Styles.button}>
                    <Text style={Styles.logoHeading}>LogIn</Text>
                </LinearGredient>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                  <Text style={Styles.actionLink}>Cannot Access to my account.</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}
