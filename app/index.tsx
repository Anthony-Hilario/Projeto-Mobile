import { Image, StatusBar, Text, View } from "react-native";
import { styles } from "@/styles/styles";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Popup() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('menu');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Rectangle.png')} style={styles.retangulo} />
      <Image source={require('@/assets/images/arara-home.png')} style={styles.imgPopup} />
      <Text style={styles.textLogo} >Enciclopédia Selvagem</Text>

      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}
