import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Vibration,
  Button,
  ImageBackground,
} from "react-native";

import { planetas } from './planetas'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <ImageBackground source={require("./assets/bg.jpeg")} resizeMode="cover" style={{ width: '100%', height: '100%', flex: 1 }}>

      <View style={styles.header}>
          <Text style={{ fontSize: 22, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }}>Vamos Explorar</Text>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>

      <ScrollView>
        {
        planetas.map((planeta) => (

        <View>
          <View style={styles.card}>
            <Text style={styles.planetaText}>{planeta.nome}</Text>
            <Text style={styles.breveInfo}>{planeta.descricaoBreve}</Text>
            <Image style={styles.planetaImg} source={{ uri: planeta.img }} />
            <Text style={styles.descricao}>{planeta.descricao}</Text>
            <View style={styles.orbital}>
              <Text style={{ fontSize: 14, color: '#fff' }}>Average Orbital Speed</Text>
              <Text style={{ fontWeight: "bold", fontSize: 14, color: '#fff' }}>29.78 km/s</Text>
            </View>

            <View style={styles.orbital}>
              <Text style={{ fontSize: 14, color: '#fff' }}>Satellites</Text>
              <Text style={{ fontWeight: "bold", fontSize: 14, color: '#fff' }}>{planeta.quantidadeSatelites}</Text>
            </View>

            <View style={styles.orbital}>
              <Text style={{ fontSize: 14, color: '#fff' }}>Surface Area</Text>
              <Text style={{ fontWeight: "bold", fontSize: 14, color: '#fff' }}>{planeta.areaSuperficieKm2}</Text>
            </View>

            <View style={styles.orbital}>
              <Text style={{ fontSize: 14, color: '#fff' }}>Rotation Period</Text>
              <Text style={{ fontWeight: "bold", fontSize: 14, color: '#fff' }}>{planeta.periodoRotacaoDias}</Text>
            </View>
          </View>
        </View>

         ))
         } 

      </ScrollView>
      
      </ImageBackground>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 80,
  },
  card: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#000",
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 20
  },
  planetaText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  breveInfo: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  descricao: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  planetaImg: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 10,
  },
  orbital: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    color: '#fff',
  }
});
