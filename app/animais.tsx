import { StatusBar, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";

export default function Animais() {
  return (
    <View style={styles.container} >
        <Text>Animais em Geral</Text>
        <TextInput placeholder="Search..." style={styles.input} />

        <StatusBar barStyle={'dark-content'}/>
    </View>
  );
}
