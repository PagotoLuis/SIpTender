import React, {useState} from 'react';
import { Text, View, StyleSheet, Switch} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { CheckBox } from 'react-native-elements'
import Slider from '@react-native-community/slider';
import update from 'react-addons-update';
import Somar from '../../components/Somar';

export default class SegundoPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bebida: [],
      soma: 0,
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
          volume: 0,
          ordem: 0,
        });
      });
      this.setState(state);
    });
  }

  alterarDado(key){
    console.log(key);
    let prov = this.state;
    if(prov.bebida[key].sel){
      prov.bebida[key].sel = false;
      let mais = prov.bebida[key].ordem;
      prov.bebida[key].ordem = 0;
      for(let i=0; i<prov.bebida.length; i++){
        if(prov.bebida[i].ordem > mais){
          prov.bebida[i].ordem = prov.bebida[i].ordem - 1;
        }
      };
      
      console.log(prov.bebida[key].sel);
      
    }else{
      prov.bebida[key].sel = true; 
      let maior=0;
      for(let i=0; i<prov.bebida.length; i++){
        if(prov.bebida[i].ordem > maior){
          maior = prov.bebida[i].ordem;
        }
      };
      maior = maior + 1;
      prov.bebida[key].ordem = maior;
      console.log("Maior:" + maior)
      console.log(prov.bebida[key].sel);
      
    }
    this.setState(prov);
    return(prov.bebida[key].sel);
  }

  alterarDadoVolume(key, volume){
    this.state.bebida[key].volume = parseInt(volume);
    
  }

  proximaPage(){
    const db = getDatabase();
    let preparo = this.state.bebida;
    if(null){

      for(let i=0; i<this.state.bebida.length; i++){
          if(preparo[i].sel == 0)delete preparo[i];
        }
        console.log(preparo)
        const reference = ref(db, 'Preparo/');
        set(reference, preparo);
      }
  }

  Ordem(key, selection){

    let prov2 = this.state;

    if(selection == 1 ){
      if(prov2.bebida[key].ordem > 0 ){
      
        for(let i=0; i<prov2.bebida.length; i++){
          if(prov2.bebida[i].ordem == prov2.bebida[key].ordem - 1){
            prov2.bebida[i].ordem = prov2.bebida[i].ordem + 1;
            prov2.bebida[key].ordem = prov2.bebida[key].ordem - 1;
            console.log("ORDEM : " + prov2.bebida[key].ordem);
            break;
          }
        };
      }
    }
    if(selection == 0 ) {
      if(prov2.bebida[key].ordem < prov2.bebida.length ){
        for(let i=0; i<prov2.bebida.length; i++){
          if(prov2.bebida[i].ordem == prov2.bebida[key].ordem + 1){
            prov2.bebida[i].ordem = prov2.bebida[i].ordem - 1;
            prov2.bebida[key].ordem = prov2.bebida[key].ordem + 1;
            console.log("ORDEM : " + prov2.bebida[key].ordem);
            break;
          }
        };
      }
    }

    

    this.setState(prov2);

  };



  render(){
    return (
      <View style={{flex:1, backgroundColor: "#ffffff"}}>
        <View style={{marginTop: 10}}>
        <FlatList
            data={this.state.bebida}
            renderItem={({item})=>{

              return(
                <View>
                <View style={styles.cardContainer}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <CheckBox
                      containerStyle={styles.card}
                      checkedColor='green'
                      uncheckedIcon='minus'
                      checkedIcon='check'
                      checked={item.sel}
                      title={item.nome}
                      textStyle={{fontSize: 25, color: '#000000'}}
                      onPress={() => {
                        this.setState({checked: !this.state.checked});
                        this.alterarDado(item.key)}}
                    />
                    {item.sel?
                      <View style={styles.ordem}>
                        <TouchableOpacity
                        onPress={() => this.Ordem(item.key, 1)}
                        >

                            <Icon2 size={25} name='caretleft' color={'#006eff'}></Icon2>

                        </TouchableOpacity>
                        
                        <Text style={styles.textOrdem}>{this.state.bebida[item.key].ordem}</Text>
                        
                        <TouchableOpacity
                        onPress={() => this.Ordem(item.key, 0)}
                        >

                            <Icon2 size={25} name='caretright' color={'#006eff'}></Icon2>
                
                        </TouchableOpacity>  
                      </View>
                      :<></>}
                  </View>
                    {item.sel?
                      <View style={{flexDirection: 'row'}}>
                        <Slider
                            style={{height: 30, margin:5}}
                            minimumValue={0}
                            maximumValue={475}
                            value={item.volume}
                            onValueChange={(data) => {this.setState({valor: data}),this.alterarDadoVolume(item.key, data)}}
                            minimumTrackTintColor="#006eff"
                            maximumTrackTintColor="#ffffff"
                            thumbTintColor = "#8c8c8c"
                        />
                        <View style={styles.boxValue}>
                            <Text style={{fontSize:20}}> {item.volume}ML</Text>
                        </View>
                      </View>
                      :
                      <>{this.alterarDadoVolume(item.key, 0)}</>
                    }
                    
                </View>
               
                </View>
              );
            }}
            
          />
           <View>
                  <Somar value={this.state.bebida} />
                </View>
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
  cardContainer:{
    margin:5,
    borderRadius: 10,
    backgroundColor: '#d1eeff',
    borderBottomRadius: 20
  },
  boxValue:{
    backgroundColor:'#ffffff', 
    paddingHorizontal:15, 
    margin: 4, 
    justifyContent:'center',
    borderRadius:30
  },
  ordem:{
    backgroundColor: '#ffffff',
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding: 5,
  },
  textOrdem:{
    color: '#006eff',
    fontSize: 25,
    fontWeight: 'bold',
  }
})