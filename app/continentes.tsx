import { FlatList, StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";
import React, {useState} from "react";
import { Picker } from '@react-native-picker/picker';

export default function Continentes() {
    const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View style={styles.container} >
        <Text>Pesquisa por Continentes</Text>

        <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="América do Sul" value="SA" />
        <Picker.Item label="América do Norte" value="NA" />
        <Picker.Item label="Ásia" value="AS" />
        <Picker.Item label="Europa" value="EU" />
        <Picker.Item label="Oceania" value="OC" />
        <Picker.Item label="Antártida" value="AN" />
        <Picker.Item label="África" value="AF" />
      </Picker>
      <Text>Opção selecionada: {selectedValue}</Text>


        <StatusBar barStyle={'dark-content'}/>
    </View>
  );
}