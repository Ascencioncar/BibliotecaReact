import React, { useState } from "react";
import { TextInput, StyleSheet, View, Image, TouchableOpacity, Text, Alert } from "react-native";

import appfirebase from "../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// Inicializa Firebase Auth sin persistencia explícita
const auth = getAuth(appfirebase); 

export default function Login(props) {

  // Lógica de credenciales
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Iniciando sesión', 'Accediendo...');
      props.navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.padre}>
      <View>
        <Image source={require('../assets/inicio.png')} style={styles.profile} />
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput 
            placeholder="Tu correo" 
            style={styles.Correo} 
            onChangeText={(text) => setEmail(text)} 
          />
        </View>
        <View style={styles.cajaTexto}>
          <TextInput 
            placeholder="Contraseña" 
            style={styles.Correo} 
            secureTextEntry 
            onChangeText={(text) => setPassword(text)} 
          />
        </View>

        <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
            <Text style={styles.TextoBoton}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profile: {
    width: 150,
    height: 150,
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Correo: {
    paddingHorizontal: 15,
  },
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: '#cccccc40',
    borderRadius: 30,
    marginVertical: 10,
  },
  PadreBoton: {
    alignItems: 'center',
  },
  cajaBoton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20,
  },
  TextoBoton: {
    textAlign: 'center',
    color: 'white',
  },
});
