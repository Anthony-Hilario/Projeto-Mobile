import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        position: 'relative', // Permite posicionamento absoluto dos filhos
      },
      row: {
        flexDirection: 'row',
      },
      button: {
        backgroundColor: '#3498db',
        width: 150,
        height: 150,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: '#6EC19A'
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },

      button0: {
        backgroundColor: '#9EC7EC',
      },

      button1: {
        backgroundColor: '#6EC19A',
      },

      button2: {
        backgroundColor: '#D49E34',
      },

      img: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1, // Coloca a imagem atrás dos demais componentes
      },
      titulo: {
        color: 'white',
        fontSize: 35,
        marginBottom: 40,
      },
      imagem: {
        width: 100,
        height: 100,
      },
      imgPopup: {
        width: 200,
        height: 200,
      },
      retangulo: {
        zIndex: -1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      },
      input: {
        height: '4%',
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        top: 30,
        position: 'absolute',
      },
      textLogo: {
        marginTop: 30,
        color: '#FFFFFF',
        fontSize: 25,
      },

      continentes: {
        width: 150,
        height: 150,
        marginTop: 10,
      }
})