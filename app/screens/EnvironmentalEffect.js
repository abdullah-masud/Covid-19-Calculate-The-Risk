import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import EnvironmentalEffectData from "./EnvironmentalEffectData";
import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

function EnvironmentalEffect(props) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.header}>Environmental Effect</Text>
          <Text style={styles.description}>
            COVID-19 is a widespread pandemic of our time. The pandemic
            (COVID-19) has also indicated the importance of focusing on another
            global crisis, i.e., climate change. What can one natural crisis
            teach us about another crisis? The surprising COVID-19 epidemic has
            demonstrated how the problems of the human race are linked with each
            other.
          </Text>
          <Text style={styles.description}>
            As COVID-19 causes massive destruction in terms of human health, the
            World Health Organization has declared medical emergencies around
            the globe. The abrupt attack by COVID-19 is related to a more
            serious global climate crisis. Researchers are trying to explore the
            relationship between COVID-19 and climate change.
          </Text>
          <Text style={styles.description}>
            The following are some of the most frequently asked questions about
            the environment and COVID-19:
          </Text>
          {EnvironmentalEffectData.map(({ question, answers }, index) => {
            return (
              <TouchableOpacity
                key={question}
                style={styles.questionsContainer}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                activeOpacity={0.7}
              >
                <View style={[styles.card]}>
                  <Text style={[styles.questions]}>{question}</Text>

                  {index === currentIndex && (
                    <View>
                      {answers.map((answer) => (
                        <Text key={answer} style={[styles.answer]}>
                          {answer}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Transitioning.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFD8B8",
    // backgroundColor: "#112031",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#32502E",
    color: "#F3EFCC",
    textAlign: "center",
    marginHorizontal: 13,
    padding: 10,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },

  description: {
    marginHorizontal: 13,
    margin: -5,
    padding: 10,
    textAlign: "justify",
    // color: "#fcdede",
  },

  card: {
    flexGrow: 1,
  },

  questionsContainer: {
    paddingHorizontal: 15,
  },

  questions: {
    backgroundColor: "#F3EFCC",
    marginHorizontal: 13,
    margin: 8,
    padding: 10,
    textAlign: "left",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },

  answer: {
    marginHorizontal: 25,
    textAlign: "justify",
    margin: 3,
  },
});

export default EnvironmentalEffect;
