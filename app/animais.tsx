import { StatusBar, Text, View, Image, TextInput, Button, FlatList, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";
import React, { useEffect, useState } from "react";

export default function Animais() {
  const [animais, setAnimais] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Estado para controlar o atraso
  const [searchTimeout, setSearchTimeout] = useState(null);

  // Busca dos dados da API
  useEffect(() => {
    fetch('http://localhost:3000/animais') // Substitua pela URL do seu servidor
      .then((response) => response.json())
      .then((data) => {
        setAnimais(data); // Armazena todos os animais
        setFilteredAnimals(data); // Inicialmente, exibe todos os animais
      })
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  // Filtragem dos animais de acordo com o texto da barra de pesquisa
  useEffect(() => {
    // Limpa o timeout anterior se existir
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Cria um novo timeout
    setSearchTimeout(setTimeout(() => {
      setLoading(true);
      const newFilteredAnimals = animais.filter(animal =>
        animal.nome.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredAnimals(newFilteredAnimals);
      setLoading(false);
    }, 1000)); // 1 segundo de atraso
  }, [searchText, animais]);

  // Limpar timeout quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [searchTimeout]);

  return (
    <View style={styles.container}>
      <Link href={'/menu'} style={styles.btnVoltar}>
        <Button title="Voltar" />
      </Link>
      {/* Barra de Pesquisa */}
      <TextInput
        placeholder="Search..."
        style={styles.input}
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      {/* Condicional para mostrar a lista */}
      {searchText.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>
            <Text>Enciclopédia Selvagem - Animais em Geral</Text>
          </Text>
          <Image source={require('@/assets/images/pata.png')} />
        </View>
      ) : loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredAnimals}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => 
          
          <View style={[styles.container, styles.row]}>
            <Image source={require(`@/assets/images/bufalo_americano.png`)} />
            <Text>{item.nome}</Text>
          </View>}
        />
      )}
      
      <StatusBar barStyle={'dark-content'} hidden={true}/>
    </View>
  );
}
