<<<<<<< HEAD
import { Image, StatusBar, Text, View } from "react-native";
=======
import { Button, Image, StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";
>>>>>>> 5d97ca9c74b83dea66088987b869b42fc923a683
import { styles } from "@/styles/styles";

export default function Popup() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Rectangle.png')} style={styles.retangulo} />
      <Image source={require('@/assets/images/arara-home.png')} style={styles.imgPopup} />
      <Text style={styles.textLogo} >Enciclopédia Selvagem</Text>

      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}
