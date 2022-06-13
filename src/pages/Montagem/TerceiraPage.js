import * as React from 'react';
import { Text, View, StyleSheet,} from 'react-native';
import { FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { getDatabase, ref, onValue, set } from 'firebase/database';

export default class TerceiraPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      preparo: [],
    };
  }
  
  buscarDado(){
    const db = getDatabase();
    const reference = ref(db, 'Preparo/');
    onValue(reference, (snapshot) => {
      let state = this.state;
      state.preparo = [];
      snapshot.forEach((childItem)=>{
        state.preparo.push({
          key: childItem.key,
          nome: childItem.val().nome,
          sel: childItem.val().sel,
          volume: childItem.val().volume,
          ordem: childItem.val().ordem,
        });
      });
      this.setState(state);
    });
  }
  componentDidMount(){
    this.buscarDado()
  }

  render(){
    return (
      <View style={{flex:1}}>
        <View>
          <FlatList
              scrollEnabled={true}
              data={this.state.preparo}
              renderItem={({item})=>{
                return(
                <View style={{flexDirection:'row'}}>
                  <View style={styles.card}>
                    <Text style={{color:'#000000', fontSize: 30, marginLeft:5}}>{item.nome}</Text>
                    <Text style={{color:'#000000', fontSize: 18, marginLeft:5}}>Quantidade: {item.volume}ML</Text>
                    <Text style={{color:'#000000', fontSize: 18, marginLeft:5}}>Ordem: {item.ordem}°</Text>
                  </View>
                  <View style={styles.percent}>
                    <Text style={{fontSize: 40, color:'#000000',}}>{parseInt((item.volume/475*100))}%</Text>
                  </View>
                </View>
                
                );
              }}
            />
        </View>
        <View style={{justifyContent: 'flex-end', flex:1}}>
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon2 name="leftcircle" size={80} color="#006eff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>this.proximaPage()}>
              <View style={{flexDirection: 'row', backgroundColor:'#00bd20', borderRadius:50, alignItems:'center'}}>
                <Icon2 style={{marginLeft:20}} name="check" size={80} color="#ffffff" />
                <Text color='#ffffff' style={{fontSize:25, marginRight: 20, fontWeight: "bold"}}> Confirmar </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn:{
    justifyContent: 'space-around', 
    alignItems: 'center',
    flexDirection: 'row', 
    margin:20 
  },
  card:{
    flex:1,
    backgroundColor: '#d1eeff',
    margin:5,
    borderTopEndRadius: 50,
    borderBottomRightRadius: 50,
    borderLeftColor: '#0075e3',
    borderLeftWidth:5
  },
  percent:{
    height: 100,
    width: 100,
    backgroundColor: '#d1eeff',
    margin: 5,
    borderRadius:50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: '#0075e3',
    borderWidth:3
  }
})