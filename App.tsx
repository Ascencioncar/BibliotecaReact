import React, { useState } from 'react';
import {View,Text,Image, TextInput,Button,Alert} from 'react-native';
import styles from './Style';

const iconinicio = require('./Assets/inicio.png');
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validación simple
    if (email === 'user@example.com' && password === 'password123') {
      Alert.alert('Login Exitoso', 'Bienvenido!');
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source={iconinicio}/>
      <Text style={styles.title}>Ingreso a biblioteca web</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
};
export default LoginScreen;
