import * as firebaseApp from 'firebase/app';
import * as firebase from 'firebase/auth';



var firebaseConfig = {
        apiKey: "AIzaSyDw95yDBeTCZk8s-H5DWAHLDDU7eGkQbMI",
        authDomain: "siptenderbase.firebaseapp.com",
        databaseURL: "https://siptenderbase-default-rtdb.firebaseio.com",
        projectId: "siptenderbase",
        storageBucket: "siptenderbase.appspot.com",
        messagingSenderId: "114794678760",
        appId: "1:114794678760:web:ab321b53f93f7fa9b7fc5d",
        measurementId: "G-RMEC66K3DY"
};
firebaseApp.initializeApp(firebaseConfig);

export default firebase;