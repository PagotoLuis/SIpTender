import React from 'react';
import { ImageBackground, TouchableOpacity, TextInput, StyleSheet, Text, ScrollView, View, Image, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native'; 
import FormRow from '../components/FormRow';
import firebase from '../components/firebaseConnection';


export default class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            senha:'',
            isLoading: false,
            message: "",
        }
    }

    onChangeandler(field, value){
        this.setState({[field]: value});
    }

    getMsgByErrorCode(errorCode){
        switch (errorCode){
            case "auth/wrong-password":
                return "Senha Incorreta";
            case "auth/invalid-email":
                return "E-mail Invalido";
            case "auth/user-not-found":
                return "Usuario não encontrado";
            case "auth/user-disable":
                return "Usuario Desativado";
            case "auth/email-already-in-use":
                return "Usuario ja esta em uso";
            case "auth/operation-not-allowed":
                return "Operação não Permitida";
            case "auth/weak-password":
                return "Senha muito fraca";
            default:
                return "Erro desconhecido";
        }
    }

    login(){
        this.setState({ isLoading: true, message: ""});
        const {email, senha} = this.state;
        var auth = firebase.getAuth()
        console.log(auth)
        return firebase
        .signInWithEmailAndPassword(auth, email, senha)
        .then(user => {
            console.log("Acesso Permitido");
            this.acessarApp();
        })
        .catch(error => {
            console.log(this.getMsgByErrorCode(error.code));
            this.setState({
                message: this.getMsgByErrorCode(error.code),
                isLoading: false
            });
        })
    }

    acessarApp(){
        this.setState({ isLoading: false});
        this.props.navigation.replace("HomePage");
    }

    cadastrar(){
        const {email, senha } = this.state;
        var auth = firebase.getAuth()
        return firebase
            .createUserWithEmailAndPassword(auth, email, senha)
            .then(user => {
                this.acessarApp();
            })
            .catch(error => {
                this.setState({
                    message: this.getMsgByErrorCode(error.code),
                    isloading: false 
                });
            })
    }

    solicitaCadastro(){
        const {email, senha} = this.state;
        
        if(!email || !senha){
            Alert.alert(
                "Cadastramento!",
                "Para se cadastrar informe e-mail e senha"
            );
            return null;

        }
        Alert.alert(
            "Cadastramento!",
            "Deseja cadastrar ser usuario com os dados informados?",
            [{
                text: "CANCELAR",
                style: 'cancel'

            },{
                text: "Cadastrar",
                onPress: () => {this.cadastrar()}
            }],
        )
    }


    renderButton(){
        if(this.state.isLoading) return <ActivityIndicator size="large" style={styles.loading} />;
        return(
            <View>
                <TouchableOpacity onPress={() => this.login()} style={styles.btn}>
                    <Text style={styles.item}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.solicitaCadastro()} style={styles.btn}>
                    <Text style={styles.item}>CADASTRE-SE</Text>
                </TouchableOpacity>

            </View>
        )
    }

    renderMessage(){
        const {message} = this.state;
        if(!message)
            return null;

        Alert.alert(
            "Erro!",
            message.toString(),
            [{
                text: 'OK',
                onPress: () => {this.setState({message: '' });}
            }]
        );
    }

    render(){
        return (
            <KeyboardAvoidingView behavior="height" enable style={{flex: 1}}>
                <ImageBackground source={require('../img/ImgLogin.png')} style= {styles.bg}>
                    <ScrollView>

                        <View style={styles.tituloView}>
                        <Image style={styles.tinyLogo}
                           
                            source={require('../img/logo.png')}
                        />
                        </View>

                        <FormRow>
                        <TextInput  
                            style={styles.input}
                            placeholder='user@email.com' 
                            keyboardType='email-address'
                            value={ this.state.email}
                            onChangeText={value => this.onChangeandler('email', value)}
                            
                        />
                        </FormRow>
                        <FormRow>
                            <TextInput 
                                style= {styles.input} 
                                placeholder="*****" 
                                secureTextEntry
                                value={this.state.senha}
                                onChangeText={value => this.onChangeandler('senha', value)}
                            />
                        </FormRow>
                        {this.renderButton()}  
                        {this.renderMessage()}  
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },

    titulo: {
        fontSize: 80,
        textAlign: 'center',
        color:'#ffffff',
    },
    tituloView:{
        paddingTop: 100,
        paddingBottom: 50,
        alignItems: 'center'
    },
    input: {
        paddingLeft: 20,
        paddingRight: 20,
        height: 60,
        backgroundColor: '#ffffff',
        opacity: 0.7,
        borderRadius: 20,
    },
    loading: {
        padding: 20,
    },
    btn:{
        padding: 20,
        margin: 10,
        fontSize: 11,
        borderRadius: 20,
        backgroundColor: '#042e80',
        opacity: 0.7,
    },
    item:{
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    },
    bg:{
        flex:1,
        width:null
    },
    tinyLogo: {
        width: 300,
        height: 240,
      },
    
});
