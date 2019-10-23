import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity,AsyncStorage } from 'react-native';
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

  logIn = async()=>{
    var c = this.state.cell;
    var p = this.state.password;
    if(c.trim() == ""){
      alert("Oops! Provide valid cell number.");
      return;
    }
    if(p.trim() == ""){
      alert("Oops! Provide valid password.");
      return;
    }
    fetch('http://10.0.2.2/FAS/api/Users/Get/'+c+'/'+p, {
      method: 'GET',
    }).then((response) => response.json())
    .then((responseJson) => {
      if(responseJson == null){
        alert('Invalid Cell number or password.');
        return;
      }
      AsyncStorage.setItem('EmployeeID',responseJson.emp_no);
      let chk;
      AsyncStorage.getItem('EmployeeID',(res)=>{
        chk = res;
      });
      alert(chk);
      //this.props.navigation.navigate('Dashboard');
    })
    .catch((error) => {
      alert(error);
    });  
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
                  <TextInput
                    keyboardType='numeric'
                    onChangeText={(cell)=> this.setState({cell})} 
                    placeholder="Registered Cell"/>
              </View>
              <View style={Styles.textParent}>
                  <Image source={password}/> 
                  <TextInput 
                  keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={(password)=> this.setState({password})}
                    placeholder="Password"/>
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
