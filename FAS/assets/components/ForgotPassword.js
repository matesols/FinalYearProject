import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../css/LoginStyle';
import LinearGredient from 'react-native-linear-gradient';
import logo from '../images/educationFolder.png';
import cell from '../images/cell.png';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cell:''
    };
  };

  static navigationOptions = {
    header:null,
  };

  forgotPassword = ()=>{
    this.props.navigation.navigate('VerifyPin');  
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
          <Text style={Styles.heading}>Account Recovery</Text>
          <View style={Styles.textParent}>
              <Image source={cell}/> 
              <TextInput placeholder="Registered Cell"/>
          </View>
          <TouchableOpacity onPress={this.forgotPassword}>
            <LinearGredient colors={['#00B7A5','#01919A','#02628C']} style={Styles.button}>
                <Text style={Styles.logoHeading}>Recover</Text>
            </LinearGredient>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>navigate('LogIn')}>
              <Text style={Styles.actionLink}>Back To Login.</Text>
          </TouchableOpacity>
      </View>
    </View>
    );
  }
}
