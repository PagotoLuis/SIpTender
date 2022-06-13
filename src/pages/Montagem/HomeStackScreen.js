import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SegundoPage from './SegundoPage';
import TerceiraPage from './TerceiraPage';

const HomeStack = createNativeStackNavigator();

export default class HomeStackScreen extends React.Component {
  render(){
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
          <HomeStack.Screen name="SegundoPage" component={SegundoPage} />
          <HomeStack.Screen name="TerceiraPage" component={TerceiraPage} />
        </HomeStack.Navigator>
    );
  }
}
