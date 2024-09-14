import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { useState } from "react";
import { Planeta } from "./Planeta";
import { planetas } from "./planetas";

export default function App() {
  const [indicePlaneta, atualizarIndice] = useState(0);

  function anteriorBtn() {
    if (indicePlaneta >= 1) {
      atualizarIndice(indicePlaneta - 1);
    }
  }

  function proximoBtn() {
    if (indicePlaneta <= planetas.length - 2) {
      atualizarIndice(indicePlaneta + 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <ImageBackground
        source={require("./assets/bg.jpeg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 22,
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Vamos Explorar
          </Text>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>

        <ScrollView>
          <Planeta planeta={planetas[indicePlaneta]}></Planeta>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => anteriorBtn()}
            >
              <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Anterior</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>  proximoBtn()}
            >
              <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>Próximo</Text>
            </TouchableOpacity>
          </View>
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
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 15,
    padding: 15,
  }
});
