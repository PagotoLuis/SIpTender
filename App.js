import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import ConfiguraPage from './src/pages/ConfiguraPage';



const AppNavigator = createStackNavigator({
  
  LoginPage:{
    screen: LoginPage,
    navigationOptions: {
      headerShown: false,
    }
  },

  HomePage:{
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
    }
  },
    
    ConfiguraPage:{
      screen: ConfiguraPage,
      navigationOptions: {
        title: "Configurações",
        headerStyle:{backgroundColor: '#0075e3'},
        headerTitleStyle: {color: '#ffffff', fontSize: 25, flexGrow: 1, textAlign: 'left'},
        headerTintColor: '#ffffff'
      }
    },
})

export default createAppContainer(AppNavigator);