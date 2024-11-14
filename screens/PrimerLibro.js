import React from "react";
import { View } from "react-native-web";

import { WebView } from 'react-native-webview';

export default function Primerlibro(props){
    return ( 
        <View>
        <WebView source={{ uri: 'https://drive.google.com/file/d/1AR322iaHBYYJQY-_fbejbifN_1PUHK-0/view?usp=sharing' }} />
        </View>
    );
}


