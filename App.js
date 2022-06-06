import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import ConfiguraPage from './src/pages/ConfiguraPage';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 
import Reducers from './src/components/Reducers'

let store = createStore(Reducers);

const AppNavigator = createStackNavigator({

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
    LoginPage:{
      screen: LoginPage,
      navigationOptions: {
        headerShown: false,
      }
    },
})

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Navigation/>
      </Provider>
    )
  }
}