import React from "react";
import { StyleSheet, View, Text, Platform } from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import { PermissionsAndroid } from 'react-native';
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
async function requestLocationPermission2() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, {
            title: 'Location permission for bluetooth scanning',
            message: 'wahtever',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
async function requestLocationPermission3() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN, {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
async function requestLocationPermission4() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT, {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
async function requestLocationPermission5() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE, {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
async function requestLocationPermission6() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION, {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
async function requestLocationPermission7() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
async function requestLocationPermission8() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}


export default class ConfiguraPage extends React.Component{
    constructor(){
        super()
        this.manager = new BleManager()
        this.state = {
            dispositivo:""
        }
    }

    componentDidMount(){
        if(Platform.OS == 'ios'){
            this.manager.onStateChange((state) => {
                if(state === 'PoweredOn') this.scanAndConnect()
            })
        } else {
            this.scanAndConnect()
        } 
    }

    scanAndConnect(){
        
        const permission = requestLocationPermission();
        const permission3 = requestLocationPermission3();
        const permission2 = requestLocationPermission2();
        const permission4 = requestLocationPermission4();
        const permission5 = requestLocationPermission5();
        const permission6 = requestLocationPermission6();
        const permission7= requestLocationPermission7();
        const permission8 = requestLocationPermission8();
        
        if(permission && permission2 && permission3 && permission4 && permission5 && permission6 && permission7&& permission8){
            const BLE_DEVICE_NAME = "HC-05";
            this.setState({dispositivo: BLE_DEVICE_NAME})

            this.manager.startDeviceScan(null, null, (error, device) => {
                console.log("Scanning...")
                console.log(device)

                if(error){
                    console.log("aaaa" + error)
                    return
                }

                if(device.name == BLE_DEVICE_NAME){
                    console.log("Connecting to device ")
                    this.manager.stopDeviceScan()
                    device.connect()
                        .then((device) => {
                            console.log("Discovering services and characteristics")
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
        }
    }
    
    render(){
        return(
            <View>
                <View style={{justifyContent:'center', alignItems: 'center',}}>
                    <Text style={{color:"#000000" }}>{this.state.dispositivo}</Text>
                    <TouchableOpacity onPress={() =>  this.scanAndConnect()}>
                        <Text style={{color:'#000000'}}> CONECTAR </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}