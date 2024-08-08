import { StatusBar, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";

export default function Continentes() {
  return (
    <View style={styles.container} >
        <Text>Pesquisa por Continentes</Text>

        <View style={styles.row}>
            <TouchableOpacity>
                <Image source={require('@/assets/images/AmericaSul.svg')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('@/assets/images/AmericaNorte.svg')} />
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity>
                <Image source={require('@/assets/images/AmericaSul.svg')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('@/assets/images/AmericaNorte.svg')} />
            </TouchableOpacity>
        </View>

        <StatusBar barStyle={'dark-content'}/>
    </View>
  );
}
