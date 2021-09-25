import React from "react";
import axios from "axios";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.getApiData();
  }

  async getApiData() {
    let resp = await axios.get("https://coronavirus-19-api.herokuapp.com/all");
    // console.warn(resp.data);
    this.setState({ data: resp.data });
  }

  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/Black-Screen-Background.jpg")}
      >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <View style={styles.update}>
          <Text style={{ color: "#ffeead", fontSize: 20, paddingBottom: 5 }}>
            Cases: {this.state.data.cases}
          </Text>
          <Text style={{ color: "#ffeead", fontSize: 20, paddingBottom: 5 }}>
            Deaths: {this.state.data.deaths}
          </Text>
          <Text style={{ color: "#ffeead", fontSize: 20 }}>
            Recovered: {this.state.data.recovered}
          </Text>
        </View>
        <TouchableOpacity style={styles.map}>
          <Text style={styles.mapStyle}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.progressInMedicine}
          onPress={() => this.props.navigation.navigate("Medicine")}
        >
          <Text style={styles.progressInMedicineStyle}>
            Progress In Medicine
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.economicalEffect}>
          <Text style={styles.economicalEffectStyle}>Economical Effect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.policy}>
          <Text style={styles.policyStyle}>Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.about}>
          <Text style={styles.aboutStyle}>About</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  logo: {
    width: 390,
    height: 100,
    right: 55,
    top: 30,
  },
  update: {
    top: 75,
  },
  map: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    marginTop: 200,
    backgroundColor: "#fc5c65",
  },
  mapStyle: {
    textAlign: "center",
    paddingTop: 10,
  },
  progressInMedicine: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#4ecdc4",
  },
  progressInMedicineStyle: {
    textAlign: "center",
    paddingTop: 10,
  },
  economicalEffect: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#ffcc5c",
  },
  economicalEffectStyle: {
    textAlign: "center",
    paddingTop: 10,
  },
  policy: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#96ceb4",
  },
  policyStyle: {
    textAlign: "center",
    paddingTop: 10,
  },
  about: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#ffeead",
  },
  aboutStyle: {
    textAlign: "center",
    paddingTop: 10,
  },
});

export default WelcomeScreen;
