import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class UserPage extends React.Component{

  render() {
    return(

      <ImageBackground source={require('../img/waterbg.png')} style= {styles.bg} >
        <View style={styles.profile}>
          <Image
          style={styles.tinyLogo}
          source={require('../img/profile.png')}
        />
        </View>

        <View>
          <Text style={styles.titulo}>Luis Pagoto</Text>
          <Text style={styles.idade}>Engenharia da Computação</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity >
          <View style={styles.btn}>
              <Text style={styles.textbtn}>Alterar</Text>
              <Icon name="vpn-key" size={30} color="#ffffff" />
            </View> 
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.btn}>
              <Text style={styles.textbtn}>Sair</Text>
              <Icon name="logout" size={30} color="#ffffff" />
            </View> 
            </TouchableOpacity>
        </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 40,
    textAlign: 'center',
  },
  idade:{
    fontSize: 20,
    textAlign: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  profile:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  btn:{
    flexDirection: 'row',
    padding:10, 
    width:180, 
    height:50, 
    backgroundColor: '#000000',
    borderRadius:10,
    justifyContent: 'center',
    marginTop: 20,
  },
  textbtn:{
    fontSize:20, 
    color:'#ffffff',
    marginRight: 10
  },
  bg:{
    flex:1,
    width:null
  },
})