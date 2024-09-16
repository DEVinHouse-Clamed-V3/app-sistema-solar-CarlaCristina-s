import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export function Planeta({ planeta }) {
  function formatNum(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " m²";
  }

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.planetaText}>{planeta.nome}</Text>
        <Text style={styles.breveInfo}>{planeta.descricaoBreve}</Text>
        <Image style={styles.planetaImg} source={{ uri: planeta.img }} />
        <Text style={styles.descricao}>{planeta.descricao}</Text>
        <View style={styles.orbital}>
          <Text style={{ fontSize: 14, color: "#fff" }}>
            Average Orbital Speed
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
            29.78 km/s
          </Text>
        </View>

        <View style={styles.orbital}>
          <Text style={{ fontSize: 14, color: "#fff" }}>Satellites</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
            {planeta.quantidadeSatelites}
          </Text>
        </View>

        <View style={styles.orbital}>
          <Text style={{ fontSize: 14, color: "#fff" }}>Surface Area</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
          {formatNum(planeta.areaSuperficieKm2)}
          </Text>
        </View>

        <View style={styles.orbital}>
          <Text style={{ fontSize: 14, color: "#fff" }}>Rotation Period</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
            {planeta.periodoRotacaoDias}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#000",
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 20,
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
    color: "#fff",
  },
});
