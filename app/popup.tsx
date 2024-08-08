import { Button, Image, StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";

export default function Popup() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Rectangle.png')} style={styles.retangulo} />
      <Image source={require('@/assets/images/arara-home.png')} style={styles.imgPopup} />
      <Text>Enciclopédia Selvagem</Text>

      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}
