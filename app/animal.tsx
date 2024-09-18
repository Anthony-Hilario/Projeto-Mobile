import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/styles';
import { Link } from 'expo-router';
import { playSound } from './sounds';

export default function Animais({nome, nome_cientifico, imagem, som}) {
  return (
    <View style={[styles.container, styles.screenColor]}>
    <Link href={'/menu'} style={styles.btnVoltar}>
      <Button title="Voltar"/>
    </Link>
      
    <View style={styles.boxName}>
        <Text>{nome}</Text>
        <Text>{nome_cientifico}</Text>
    </View>
    <Image source={imagem} style={{width: 300, height: 250, borderRadius: 8}}/>
    <View style={styles.animalInfo}>
        <TouchableOpacity onPress={()=> playSound(som)} style={styles.btnSound} >
            <Image source={require('@/assets/images/sound.png')} />
        </TouchableOpacity>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo nam quasi nobis recusandae, esse in ullam hic quis expedita ipsum minus, necessitatibus iste ex doloribus aspernatur provident blanditiis odio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut similique neque sit fugiat eligendi recusandae voluptas. Dicta rem nobis, perferendis mollitia aut aperiam eveniet sapiente qui explicabo natus, deserunt soluta.
        </Text>
    </View>
        
    </View>
  );
};

