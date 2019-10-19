import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import Styles from '../css/LoginStyle';
import logo from '../images/educationFolder.png'
import LinearGredient from 'react-native-linear-gradient';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;

    setTimeout(() => {
      navigate('LogIn');
    }, 1000);
  };
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
        <LinearGredient colors={['#00B7A5','#01919A','#02628C']} style={Styles.mainScreen}>
            <Text style={Styles.logoText}>Welcome To</Text>
            <Image source={logo} style={Styles.logo}/>
            <Text style={Styles.logoHeading}>F.A.S</Text>
        </LinearGredient>
    );
  }
}
