import * as React from 'react';
import { Text, View, StyleSheet, Switch} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { CheckBox } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';

export default class SegundoPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bebida: [],
    };

  }
  
  componentDidMount(){
    if(this.state.bebida.length == 0){
      this.buscarDado();
      console.log("lista preenchida")
    }
  }

  buscarDado(){
    const db = getDatabase();
    const reference = ref(db, 'Bebidas/');
    onValue(reference, (snapshot) => {
      let state = this.state;
      state.bebida = [];
      snapshot.forEach((childItem)=>{
        state.bebida.push({
          key: childItem.key,
          nome: childItem.val().nome,
          sel: childItem.val().sel,

        });
      });
      this.setState(state);
    });
  }

  alterarDado(key){
    console.log(key);
    if(this.state.bebida[key].sel){
      this.state.bebida[key].sel = false; 
      console.log(this.state.bebida[key].sel);
    }else{
      this.state.bebida[key].sel = true; 
      console.log(this.state.bebida[key].sel);
    }
    return(this.state.bebida[key].sel);
  }

  proximaPage(){
    const db = getDatabase();
    const reference = ref(db, 'Receita/');
    set(reference, this.state.bebida);
    this.props.navigation.navigate('TerceiraPage')
  }

  render(){
    return (
      <View style={{flex:1, backgroundColor: "#ffffff"}}>
        <View style={{marginTop: 10}}>
        <FlatList
            data={this.state.bebida}
            renderItem={({item})=>{
              return(
                <View style={{flex:1}}>
                  <CheckBox
                    containerStyle={styles.card}
                    checkedColor='green'
                    uncheckedIcon='minus'
                    checkedIcon='check'
                    checked={item.sel}
                    title={item.nome}
                    textStyle={{fontSize: 25}}
                    onPress={() => {
                      this.setState({checked: !this.state.checked});
                      this.alterarDado(item.key)}}
                  />   
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
              <Icon2 name="rightcircle" size={80} color="#006eff" />
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
    flexDirection: 'row',
    margin:5,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#d1eeff',
  },
})