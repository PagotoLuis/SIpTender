import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

const Somar = (props) => {

    let volume = props.value;
    let somar=0;
    for(let i=0; i<volume.length; i++){
      somar = somar + volume[i].volume;
    }

    if(somar > 475){
      return(
        <View style={styles.limite}>
          <Text style={styles.text}>Volume somado de {somar}ML</Text>
          <Text style={styles.text}>Excedeu a capacide de 475ML do copo</Text>
          <Text style={styles.text}>Favor diminuir {somar - 475}ML!!!.</Text>
        
        </View>
      );
    } else {
      return(
        <View style={styles.correto} >
          <Text style={styles.text}>Total: {somar}ML</Text>
        </View>
       
      );
    }
    
    
  };

const styles = StyleSheet.create({
    limite: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        elevation: 0.5,
        backgroundColor: '#bd0016',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20, 
      color: '#ffffff'
    },
    correto: {
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
      elevation: 0.5,
      backgroundColor: '#00960a',
  }
});


export default Somar;