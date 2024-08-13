import { Button, Image, StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";
//import { styles } from "@/styles/syles";

export default function Page2() {
  return (
    <View>
      <Text>Escaneie o QR Code aproximando-o para a câmera</Text>

      <Link href={'/'}>
        <Button title="Voltar" />
      </Link>

      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}
