import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../css/LoginStyle';
import LinearGredient from 'react-native-linear-gradient';
import logo from '../images/educationFolder.png';
import barcode from '../images/barcode.png';


export default class SetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin:''
        };
      };
    
      static navigationOptions = {
        header:null
      };
    
      setPassword = ()=>{
          alert('Congratulation! Password changed successfully.');
          this.props.navigation.navigate('LogIn');  
      };
    

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
            <Text style={Styles.heading}>New Password</Text>
            <View style={Styles.textParent}>
                <Image source={barcode}/> 
                <TextInput placeholder="Enter new password" maxLength={16}/>
            </View>
            <View style={Styles.textParent}>
                <Image source={barcode}/> 
                <TextInput placeholder="Confirm password" maxLength={16}/>
            </View>
            <TouchableOpacity onPress={this.setPassword}>
              <LinearGredient colors={['#00B7A5','#01919A','#02628C']} style={Styles.button}>
                  <Text style={Styles.logoHeading}>Set Password</Text>
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
