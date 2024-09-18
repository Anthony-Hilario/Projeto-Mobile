import React from "react";
import { StatusBar, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";
import { songJoJo, playSound } from "./sounds";


export default function Index() {
  return (
  <View style={styles.container} >
    <Text style={styles.titulo}>Enciclopédia Animal</Text>
    
    <Link href={'/animal'}>
      <Button title="Pag. Panda" />
    </Link>

    <View style={styles.row}>
      <Link href={'/animais'}>
        <TouchableOpacity style={[styles.button, styles.button0]}>
          <Text style={styles.buttonText}><Image source={require('@/assets/images/lupa.svg')}/></Text>
        </TouchableOpacity>
      </Link>

      <Link href={'/continentes'}>
        <TouchableOpacity style={[styles.button, styles.button1]}>
          <Text style={styles.buttonText}><Image source={require('@/assets/images/globo.png')}/></Text>
        </TouchableOpacity>
      </Link>
    </View>

    <View style={styles.row}>
      <Text style={styles.textoMenu}>Pesquisar pelo Nome</Text>
      <Text style={styles.textoMenu}>Pesquisa por Continente</Text>
    </View>

    <Image style={styles.img} source={require('@/assets/images/arara-azul.jpg')} />

    <StatusBar barStyle={'dark-content'} hidden />
  </View>
  );
}
