import React from "react";
import { Text,StyleSheet,View,Image, TouchableOpacity } from "react-native";
import Primerlibro from "./PrimerLibro";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

export default function Home(){
    return (        
        <View style={styles.inicio}>
            <Text style={styles.tituloinicio}>
                Libros publicados
            </Text>
            <Image source={require('../assets/primerlibro.png')} style={styles.fotoprimerlibro}/>
            <View>
            <Text style={styles.textoprimer}>
                Compromiso academico: 
            </Text>
            <Text style={styles.descripcion}>Este PDF contiene los compromisos academicos
                 como también la cronología de las actividades. Tener en cuenta su lectura con mucha
                 atención</Text>
            </View>
            <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.cajaBoton} onPress={() => navigation.navigate('PrimerLibro')}>
            <Text style={styles.TextoBoton}>Descargar</Text>
          </TouchableOpacity>
        </View>
        </View>
        


    );

}

const styles= StyleSheet.create({
    inicio:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    tituloinicio:{
        fontSize: 25,
        textAlign: 'center',
    },
    textoprimer:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    descripcion:{
        backgroundColor:'#cccccc40',
        paddingVertical: 10,
        textAlign: 'center',
    },
    fotoprimerlibro:{
        width: 100,
        height: 100,
        alignItems: 'center',
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