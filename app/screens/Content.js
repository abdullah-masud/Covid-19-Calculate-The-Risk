import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import data from "./data";

function Content(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Climate Change vs. Covid-19</Text>
      <View style={styles.paragraph}>
        <StatusBar hidden />
        {data.map(({ question, reply }) => {
          return (
            <TouchableOpacity
              key={question}
              onPress={() => {}}
              style={styles.cardContainer}
            >
              <View style={[styles.card]}>
                <Text style={[styles.titles]}>{question}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        {/* <Text style={styles.textStyle}> */}

        {/* </Text> */}
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.textStyle}></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFD8B8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F3EFCC",
    textAlign: "center",
    marginHorizontal: 13,
    padding: 10,
    backgroundColor: "#32502E",
    margin: 10,
  },

  textStyle: {
    color: "#32502E",
    fontSize: 15,
    textAlign: "justify",
  },

  card: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  titles: {
    // backgroundColor: '#F3EFCC',
    fontSize: 20,
    marginHorizontal: 13,
    margin: 8,
    padding: 10,
    letterSpacing: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Content;
