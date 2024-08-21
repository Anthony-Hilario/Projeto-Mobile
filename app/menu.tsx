import { StatusBar, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { Link, useNavigation } from "expo-router";
import { styles } from "@/styles/styles";
import { songJoJo, playSound } from "./sounds";
import React from "react";

export default function Index() {
  return (
  <View style={styles.container} >
    <Text style={styles.titulo} >Enciclopédia Animal</Text>
    <Button title="Press Me" onPress={playSound} />
    <Button title="ZA WARUDO!" onPress={songJoJo} />
    
    <Link href={'/animal'}>
      <Button title="Panda" />
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
      <Link href={'/'}>
        <TouchableOpacity style={[styles.button, styles.button2]}>
          <Text style={styles.buttonText}><Image source={require('@/assets/images/camera.png')}/></Text>
        </TouchableOpacity>
      </Link>
    </View>

    <Image style={styles.img} source={require('@/assets/images/arara-azul.jpg')} />

    <StatusBar barStyle={'dark-content'} hidden />
  </View>
  );
}
