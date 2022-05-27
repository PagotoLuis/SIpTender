import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InfoPage extends React.Component{

  render() {
    return(

      <ImageBackground source={require('../img/waterbg.png')} style= {styles.bg} >
        <View style={styles.profile}>
          <Image
          style={styles.tinyLogo}
          source={require('../img/logo.png')}
        />
        </View>
        <View style={{flex:1}}>
          <Text style={styles.desc}>
            É um aplicativo voltado para controlar uma maquina que 
            ira fazer o preparo de um drink automaticamente dando as opções
          </Text>
          <Text style={styles.item}>- Ver Receitas</Text>
          <Text style={styles.item}>- Preparar sua propria receita</Text>
          <Text style={styles.item}>- Conectar se a Maquina</Text>
          
        </View>
          <View style={{justifyContent: 'flex-end', paddingBottom: 50}}>
            <Text style={styles.autor} >Desenvolvido por Luis Pagoto e Maikon Oliveira</Text>
          </View>
      </ImageBackground>
      

    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 205,
  },
  profile:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  desc:{
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    marginBottom: 50
  },
  item:{
    fontSize:18,
    marginLeft: 20
  },
  autor: {
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
    fontStyle: 'italic'
  },
  bg:{
    flex:1
  }

})