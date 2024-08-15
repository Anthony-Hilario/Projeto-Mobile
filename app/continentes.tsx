import { StatusBar, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";
import React from "react";

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
                <Image source={require('@/assets/images/africa.svg')} style={styles.continentes} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('@/assets/images/oceania.svg')} style={styles.continentes} />
            </TouchableOpacity>
        </View>

        <View style={styles.row} >
            <TouchableOpacity>
                <Image source={require('@/assets/images/antarctica.png')} style={styles.continentes} />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={require('@/assets/images/europa.png')} />
            </TouchableOpacity>
        </View>

        <StatusBar barStyle={'dark-content'}/>
    </View>
  );
}
