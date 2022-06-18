import { PermissionsAndroid } from 'react-native';

export async function requestLocationPermissionFine() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          title: 'FINE permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth FINE scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth FINE scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}

export async function requestLocationPermissionCoarse() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, {
            title: 'COARSE permission for bluetooth scanning',
            message: 'wahtever',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth COARSE scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth COARSE scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
export async function requestLocationPermissionScan() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN, {
          title: 'SCAN permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth SCAN scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth SCAN scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
export async function requestLocationPermissionConnect() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT, {
          title: 'Connect permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth CONNECT scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth CONNECT scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
export async function requestLocationPermissionAdvertise() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE, {
          title: 'ADVERTISE permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      ); 
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth ADVERTISE scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth ADVERTISE scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
}
