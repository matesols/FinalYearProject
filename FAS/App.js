import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

/*Import Screens Start*/
import SplashScreen from './assets/components/SplashScreen';
import LogIn from './assets/components/LogIn';
import ForgotPassword from './assets/components/ForgotPassword';
import SetPassword from './assets/components/SetPassword';
import VerifyPin from './assets/components/VerifyPin';
import SubjectFolders from './assets/components/SubjectFolders';
import Dashboard from './assets/components/Dashboard';
/*Import Screens End*/ 

const MainNavigator = createStackNavigator({
  SplashScreen: {screen: SplashScreen},
  LogIn: {screen: LogIn},
  ForgotPassword: {screen: ForgotPassword},
  SetPassword: {screen: SetPassword},
  VerifyPin: {screen: VerifyPin},
  SubjectFolders: {screen: SubjectFolders},
  Dashboard: {screen: Dashboard},
},
{
  initialRouteName: 'SplashScreen',
});

const AppStack = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppStack/>
    );
  }
}
