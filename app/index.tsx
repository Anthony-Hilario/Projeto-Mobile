import { StatusBar, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";
import { Audio } from 'expo-av';
import React from "react";

export default function Index() {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('@/assets/sounds/panda.mp3'));
    await sound.playAsync();
  };

  return (
  <View style={styles.container} >
    <Text style={styles.titulo} >Enciclopédia Animal</Text>
    <Button title="Press Me" onPress={playSound} />
      
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
