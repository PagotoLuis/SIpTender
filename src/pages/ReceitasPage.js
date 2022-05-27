import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class ReceitasPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      nome: [],
    }
  }

  componentDidMount(){
    this.buscarDado();
  }

  
  buscarDado(){
    const db = getDatabase();
    const reference = ref(db, 'Drinks/');
    onValue(reference, (snapshot) => {
      let state = this.state;
      state.nome = [];
      snapshot.forEach((childItem)=>{
        state.nome.push({
          key: childItem.key,
          nome: childItem.val().Nome,
          desc: childItem.val().Desc,
          img: childItem.val().Img,
        });
      });
      this.setState(state);
    });
  };

  render(){
    return(
      <ImageBackground source={require('../img/waterbg.png')} style= {styles.bg} >
        <View style={{flex:1}}>
          <FlatList
            data={this.state.nome}
            renderItem={({item})=>{
              return(
                <View style={styles.container}>
                  <TouchableOpacity>
                    <View style={styles.card}>
                      <View style={styles.Ctiny}>
                        <Image
                          style={styles.tinyLogo}
                          source={{uri: item.img}}
                        />
                      </View>
                      <View style={styles.escrita}>
                          <Text style={styles.Tnome}>{item.nome}</Text>
                          <Text>{item.desc}</Text>
                        <Text></Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg:{
    flex:1,
    width:null
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  Ctiny:{
    paddingRight:10,
    
  },
  card:{
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderTopLeftRadius:100,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#d1eeff',
    padding: 5,
  },
  Tnome:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold"

  },
  escrita:{
    flex:1,
    fontSize: 18,
    textAlign: 'center',
  },
  container:{
    flex:1,
  },
})