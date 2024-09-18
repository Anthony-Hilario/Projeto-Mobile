import { Image, StatusBar, Text, View } from "react-native";
import { styles } from "@/styles/styles";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Popup() {
  const route = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      route.replace('/menu');
    }, 2000);

    return () => clearTimeout(timer);
  }, [route]);

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Rectangle.png')} style={styles.retangulo} />
      <Image source={require('@/assets/images/arara-home.png')} style={styles.imgPopup} />
      <Text style={styles.textLogo}>Enciclopédia Selvagem</Text>

      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}
