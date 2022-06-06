import * as React from 'react';
import { Text, View, Button, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PrimeiroPage({ navigation }) {
  return (
    <View style={{flex:1}}>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <TouchableOpacity onPress={() => navigation.navigate('SegundoPage')}>
        <Image
          style={styles.tinyLogo}
          source={require('../../img/INICIAR.png')}
        />
      </TouchableOpacity>
     
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
  },
  descpage:{
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 20,
    marginBottom: 20
  },
  desccont:{
    backgroundColor:'#006eff',
    margin: 10,
    borderRadius:10,
    justifyContent:'center',
  
  }
})