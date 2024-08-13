import { Image, StyleSheet, View, Text } from 'react-native'

export default function HomeScreen(){
  return (
    <View style={styles.container}>
      <Image source={require('../img/mapa.png')} style={styles.logo}></Image>
      <Text style={styles.titulo}>Sistemas de Geolocalização</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  logo: {
    width: '100%',
    height: 400,
    marginTop: 15,
    resizeMode: 'contain'
  },
  titulo: {
    fontSize: 35,
    color: '#000',
    textAlign: 'center',
    fontWeight: '900'
  },
})