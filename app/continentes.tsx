import { Button, StatusBar, Text, View } from "react-native";
import { styles } from "@/styles/styles";
import React, {useState} from "react";
import { Link } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import Animais from "./animal";

export default function Continentes() {
    const [selectedValue, setSelectedValue] = useState("SA");
    
    const Resposta = () => { 
      switch (selectedValue) {
      case "SA":
        return <Text>Xablau 1</Text>;
      case "NA":
        return <Animais />;
      case "AS":
        return <Text>Xablau 3</Text>;
      case "EU":
        return <Text>Xablau 4</Text>;
      case "OC":
        return <Text>Xablau 5</Text>;
      case "AN":
        return <Text>Xablau 6</Text>;
      case "AF":
        return <Text>Xablau 7</Text>;
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Link href={'/menu'} style={styles.botaoVoltar}>
        <Button title="Voltar"/>
      </Link>

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
      <Resposta />


        <StatusBar barStyle={'dark-content'}/>
    </View>
  );
}

/*
Usar o switch como um norte para o retorno dos dados do banco de dados,
nesse caso, os animais que correspondem ao seu respectivo continente.
*/