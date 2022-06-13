import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import ReceitasPage from './ReceitasPage';
import UserPage from './UserPage';
import InfoPage from './InfoPage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './Montagem/HomeStackScreen';

const Tab = createMaterialTopTabNavigator();

export default class HomePage extends React.Component{
  

  constructor(props){
    super(props);
    

  }
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.superior}>
          <Text style={styles.titulo}>SipTender</Text>
          <TouchableOpacity style={{ flex:1, paddingRight:20, justifyContent: 'center'}} 
            onPress={() => this.props.navigation.navigate('ConfiguraPage')}>
            <Icon2 name="gear" size={40} color='#ffffff'/>
          </TouchableOpacity>    
        </View>
        
        <NavigationContainer>
          <Tab.Navigator 
            screenOptions={() => ({  
              tabBarStyle:{height:60, backgroundColor:'#0075e3'},
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#000000',
              tabBarshowIcon: true,
              tabBarIndicatorStyle:{height:3, backgroundColor: '#ffffff'}
            })}
            
            
          >
            <Tab.Screen 
              name="Receitas" 
              component={ReceitasPage}
              height= {30}
              options={() => ({
                tabBarIcon: () => (
                  <Icon name="list" size={25} color='#ffffff'/>
                ),
              })}
            />
            <Tab.Screen name="Preparo"
              height= {30}
              component={HomeStackScreen}
              options={() => ({
                tabBarIcon: () => (
                  <Icon name="sliders" size={25} color='#ffffff'/>
                ),
              })}
            />
            <Tab.Screen 
              name="Perfil" 
              component={UserPage} 
              height= {30}
              options={() => ({
                tabBarIcon: () => (
                  <Icon name="user" size={25} color='#ffffff'/>
                ),
              })}
            />
            <Tab.Screen 
              name="Info" 
              component={InfoPage} 
              height= {30}
              options={() => ({
                tabBarIcon: ({tintColor}) => (
                  <Icon name="info" size={25} color='#ffffff'/>
                ),
              })}
            />         
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    )
  }
  
}
const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#ffffff',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    titulo:{
      fontSize:35,
      paddingLeft: 20,
      color: '#ffffff',
      flex: 1,
    },
    superior:{
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'space-between',
      backgroundColor: '#0075e3'
    }
});
