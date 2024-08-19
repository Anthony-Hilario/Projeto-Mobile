import { StatusBar, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";
import React from "react";

export default function Animais() {
  return (
    <View style={styles.container} >
        <Text>Enciclopédia Selvagem - Animais em Geral</Text>
        <TextInput placeholder="Search..." style={styles.input} />
        <Image source={require('@/assets/images/pata.png')} />
        <Text>Animais em Geral</Text>
        <TextInput placeholder="Search..." style={styles.input} />

        <StatusBar barStyle={'dark-content'}/>
    </View>
  );
}

/*
esta pagina sera usada como multipagina para animais,
por meio de uma pilha de outras paginas puxadas do banco de dados
*/
