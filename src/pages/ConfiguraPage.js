import React from "react";
import { StyleSheet, View, Text, Platform, Alert, TextInput,Switch } from 'react-native';
import {BleManager, ScanMode} from 'react-native-ble-plx';
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { 
        requestLocationPermissionAdvertise, 
        requestLocationPermissionCoarse,
        requestLocationPermissionConnect,
        requestLocationPermissionFine,
        requestLocationPermissionScan,
      } from '../components/Permissoes';


export default class ConfiguraPage extends React.Component{
    constructor(){
        super()
        this.manager = new BleManager()
        this.state = {
            dispositivo:"HC-05",
            erro:"",
            scan:"",
            blebtn: false
        }
        requestLocationPermissionFine()
        //requestLocationPermissionAdvertise();
        //requestLocationPermissionCoarse();
        //requestLocationPermissionConnect();
        //requestLocationPermissionScan();
    
    }

    scanInit(){
        if(Platform.OS == 'ios'){
            this.manager.onStateChange((state) => {
                if(state === 'PoweredOn') this.scanAndConnect()
            })
        } else {
            this.scanAndConnect()
        } 
    }
    
    componentDidMount(){
        
    }

    async scanAndConnect(){
            const BLE_DEVICE_NAME = this.state.dispositivo;
            console.log("iniciando")
            this.manager.startDeviceScan(null, {scanMode: ScanMode.LowPower}, (error, device) => {
                console.log("Scanning...")
                console.log(" NOME " + device.name)
                this.setState({
                    scan: [device.name + device.id]
                })

                if(error){
                  console.log("aaaa" + error)
                  this.setState({erro: [error.message]})
                  return 
                }

                if(device.name == BLE_DEVICE_NAME){
                    console.log("Connecting to device ")
                    this.setState({scan: [JSON.stringify("Conectado: " + device.name)]})
                    this.manager.stopDeviceScan()
                    device.connect()
                        .then((device) => {
                            console.log("Discovering services and characteristics")
                            console.log(device.discoverAllServicesAndCharacteristics())
                            return device.discoverAllServicesAndCharacteristics()
                        })
                        .then((device) =>{
                            console.log("Settings Notifications")
                        })
                        .then(() =>{
                            console.log("Listening...")
                        },(error) =>{
                            console.log(error.message)
                        })
                }
            })
            console.log(device);

            if(this.state.erro != ''){
              Alert.alert("Erro: " + this.state.erro);
              
              this.setState({erro:""})
            }
    }
    
    blebutton(){

        if(this.state.blebtn){
            this.setState({
                blebtn: false
            })
        } else {
            this.manager.enable
            this.setState({
                blebtn: true
            })
        }
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor: '#ffffff'}}>
                <View style={styles.bleonoff}>
                    <Text style={{color: "#000000", fontSize: 30, margin:20}}>BLUETOOTH</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.blebtn ? "#0075e3" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], }}
                        onValueChange={() => this.blebutton()}
                        value={this.state.blebtn}
                    />
                </View>
                <View style={{justifyContent:'center', alignItems: 'center'}}>
                    <Text style={styles.titulo }>Maquina a ser conectada: </Text>
                    <View style={{marginBottom:30, flexDirection: 'row', alignItems:'center', borderWidth: 2, borderRadius: 40, width:300}}> 
                      <Icon name='bluetooth' size={35} color={'#000000'} ></Icon>
                      <TextInput 
                                style= {styles.descricao} 
                                value={this.state.dispositivo}
                                onChangeText={value => this.setState({dispositivo: value})}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() =>  this.scanInit()}>
                        <Text style={styles.conectar}> ESCANEAR e CONECTAR</Text>
                    </TouchableOpacity>          
                    <Text style={styles.descricao}>{this.state.scan}</Text>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
  titulo:{color: '#000000', fontSize: 30, marginTop:20, marginBottom:30},
  descricao:{color: '#000000', fontSize: 40, fontStyle: 'italic', margin:20},
  conectar:{color: '#ffffff'},
  button:{backgroundColor: '#0075e3', padding: 20,borderRadius: 10, width: 300, alignItems:"center", margin:10},
  bleonoff:{justifyContent: 'space-between', flexDirection: 'row', borderBottomColor: "#000000", borderColor: "#ffffff", borderWidth:2, margin: 10}

})
