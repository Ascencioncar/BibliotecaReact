import React from 'react';
import {View,Text,Image, TextInput} from 'react-native';
import styles from './Style';

const iconinicio = require('./Assets/inicio.png');
export default function App(){

  return (
    <View>
    <Image style={styles.imagen} source={iconinicio}/>
    <Text style={styles.title}>Ingreso a biblioteca web</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
    </View>
  );
}
