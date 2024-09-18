import React, { useState, useEffect } from "react";
import { Button, StatusBar, Text, View, FlatList, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { styles } from "@/styles/styles";
import { Link } from "expo-router";
import { Picker } from '@react-native-picker/picker';

export default function Continentes() {
  const [selectedValue, setSelectedValue] = useState("América do Sul"); // Valor inicial do picker
  const [animais, setAnimais] = useState([]); // Estado para armazenar a lista de animais
  const [loading, setLoading] = useState(false); // Estado para mostrar um indicador de carregamento

  // Função para buscar os animais do continente selecionado
  const fetchAnimais = async (continente: string) => {
    setLoading(true); // Ativa o indicador de carregamento
    try {
      const response = await fetch(`http://localhost:3000/${continente}`); // Faz a requisição para o back-end
      const data = await response.json(); // Converte a resposta para JSON
      setAnimais(data); // Atualiza o estado com os animais recebidos
    } catch (error) {
      console.error("Erro ao buscar os animais:", error);
    } finally {
      setLoading(false); // Desativa o indicador de carregamento
    }
  };

  // Executa sempre que o valor do Picker (continente) mudar
  useEffect(() => {
    fetchAnimais(selectedValue); // Chama a função para buscar os animais do continente
  }, [selectedValue]);

  return (
    <View style={styles.container}>
      <Link href={'/menu'} style={styles.botaoVoltar}>
        <Button title="Voltar" />
      </Link>

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)} // Atualiza o valor selecionado no Picker
      >
        <Picker.Item label="América do Sul" value="América do Sul" />
        <Picker.Item label="América do Norte" value="América do Norte" />
        <Picker.Item label="Ásia" value="Ásia" />
        <Picker.Item label="Europa" value="Europa" />
        <Picker.Item label="Oceania" value="Oceania" />
        <Picker.Item label="Antártida" value="Antártida" />
        <Picker.Item label="África" value="África" />
      </Picker>

      <Text>Opção selecionada: {selectedValue}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Exibe um indicador de carregamento enquanto os dados são buscados
      ) : (
        <FlatList
          data={animais}
          keyExtractor={(item) => item._id} // Substitua por um campo único de cada animal (ID, por exemplo)
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Link href={'/animal'} style={[styles.container,styles.animalBoxSearch]}>
                <TouchableOpacity style={styles.row} >
                  <Image source={{uri:`http://localhost:8081/${item.imagem}`}}
                  style={{width: 100, height: 100}} />
                  <Text>{item.nome}</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
        />
      )}

      <StatusBar barStyle={"dark-content"} />
    </View>
  );
}
