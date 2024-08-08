import { StatusBar, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";

export default function Index() {
  return (
  <View style={styles.container} >
    <Text style={styles.titulo} >Enciclopédia Animal</Text>
      
    <View style={styles.row}>
      <Link href={'animais'}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}><Image source={require('@/assets/images/lupa.svg')}/></Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}><Image source={require('@/assets/images/globo.png')}/></Text>
      </TouchableOpacity>
    </View>

    <View style={styles.row}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}><Image source={require('@/assets/images/camera.png')}/></Text>
      </TouchableOpacity>
    </View>

    <Image style={styles.img} source={require('@/assets/images/arara-azul.jpg')} />


    <StatusBar barStyle={'dark-content'} />
  </View>
  );
}
