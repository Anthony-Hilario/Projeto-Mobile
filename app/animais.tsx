import { StatusBar, Text, View, Image, TextInput, Button } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";
import React from "react";

export default function Animais() {
  return (
    <View style={styles.container} >
      <Link href={'/menu'} style={styles.btnVoltar}>
      <Button title="Voltar"/>
    </Link>
        <TextInput placeholder="Search..." style={styles.input} />
        <Text>Enciclopédia Selvagem - Animais em Geral</Text>
        <Image source={require('@/assets/images/pata.png')} />
        

        <StatusBar barStyle={'dark-content'} hidden={true} />
    </View>
  );
}

/*
esta pagina sera usada como multipagina para animais,
por meio de uma pilha de outras paginas puxadas pela navegacao dinamica
*/
