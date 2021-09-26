import React, { Component } from "react";
import { render } from "react-dom";
import {
  Picker,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default class ProgressInMedicine extends Component {
  state = {
    selectedcat: "",
    category: [
      {
        itemName: "Select a Vaccine",
      },
      {
        itemName: "Pfizer",
      },
      {
        itemName: "AstraZeneca",
      },
      {
        itemName: "Janssen",
      },
      {
        itemName: "Sinovac",
      },
      {
        itemName: "Moderna",
      },
      {
        itemName: "Sinopharm-BBIBP",
      },
    ],
  };

  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }

  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/Black-Screen-Background.jpg")}
      >
        <View style={styles.viewStyle}>
          <View style={styles.title}>
            <Text>
              National regulatory authorities have granted emergency use
              authorizations for twenty-three COVID-19 vaccines. Six of those
              have been approved for emergency or full use by at least one
              WHO-recognized stringent regulatory authority (AstraZeneca,
              Pfizer, Sinopharm-BBIBP, Moderna, Sinovac, and Janssen).
            </Text>
          </View>
          <View>
            <Text style={styles.textStyle}>Categories</Text>
          </View>
          <View style={{ flex: 0.8, fontSize: 14 }}>
            <Picker
              itemStyle={styles.itemStyle}
              mode="dropdown"
              style={styles.pickerStyle}
              selectedValue={this.state.selectedcat}
              onValueChange={this.onValueChangeCat.bind(this)}
            >
              {this.state.category.map((item, index) => (
                <Picker.Item
                  color="#0087F0"
                  label={item.itemName}
                  value={item.itemName}
                  index={index}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.ttstyle}>
            {this.state.selectedcat == "Pfizer" ? (
              <ScrollView>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    PFIZER
                  </Text>
                  <Text>
                    The Pfizer–BioNTech COVID-19 vaccine, also known as
                    Comirnaty, is an mRNA vaccine produced by the German company
                    BioNTech and the American company Pfizer. In Hong Kong,
                    Macau, and Taiwan, Comirnaty is distributed by Fosun Pharma.
                  </Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    "Who Should Get Vaccinated?
                  </Text>
                  <Text>Recommended for people 12 years and older.</Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Who Should NOT Get Vaccinated?
                  </Text>
                  <Text>
                    If you have had a severe allergic reaction (anaphylaxis) or
                    an immediate allergic reaction, even if it was not severe,
                    to any ingredient in the Pfizer-BioNTech COVID-19 vaccine
                    (such as polyethylene glycol), you should not get this
                    vaccine. If you had a severe or immediate allergic reaction
                    after getting the first dose of a Pfizer-BioNTech COVID-19
                    vaccine, you should not get a second dose of either of this
                    vaccine. A severe allergic reaction is one that needs to be
                    treated with epinephrine or EpiPen or with medical care. An
                    immediate allergic reaction means a reaction within 4 hours
                    of exposure, including symptoms such as hives, swelling, or
                    wheezing (respiratory distress). If you aren’t able to get
                    this vaccine, you may still be able to get a different type
                    of COVID-19 vaccine.{" "}
                  </Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Possible Side Effects:
                  </Text>
                  <Text>
                    Pain, Redness ,Swelling, Tiredness, Headache, Muscle pain,
                    Chills, Fever, Nausea.
                  </Text>
                </View>
              </ScrollView>
            ) : null}
            {this.state.selectedcat == "Moderna" ? (
              <ScrollView>
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    Moderna
                  </Text>
                  <Text>
                    The Moderna COVID-19 vaccine, also known as Spikevax, is an
                    mRNA vaccine produced by the American company Moderna, the
                    U.S. National Institute of Allergy and Infectious Diseases,
                    the U.S. Biomedical Advanced Research and Development
                    Authority, and the Coalition for Epidemic Preparedness
                    Innovations.
                  </Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Who Should Get Vaccinated?
                  </Text>
                  <Text>Recommended for people aged 18 years and older.</Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Who Should NOT Get Vaccinated?
                  </Text>
                  <Text>
                    If you have had a severe allergic reaction (anaphylaxis) or
                    an immediate allergic reaction, even if it was not severe,
                    to any ingredient in an mRNA COVID-19 vaccine (such as
                    polyethylene glycol), you should not get an mRNA COVID-19
                    vaccine. If you had a severe or immediate allergic reaction
                    after getting the first dose of an mRNA COVID-19 vaccine,
                    you should not get a second dose of either of the mRNA
                    COVID-19 vaccines (Moderna or Pfizer-BioNTech). A severe
                    allergic reaction is one that needs to be treated with
                    epinephrine or EpiPen or with medical care.
                  </Text>
                  <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                    Possible Side Effects:
                  </Text>
                  <Text>
                    Pain, Redness ,Swelling, Tiredness, Headache, Muscle pain,
                    Chills, Fever, Nausea.
                  </Text>
                </View>
              </ScrollView>
            ) : null}
            {this.state.selectedcat == "Janssen" ? (
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Janssen
                </Text>
                <Text>
                  The Janssen COVID-19 vaccine is a viral vector vaccine
                  produced by Janssen Pharmaceutica (a subsidiary of Johnson and
                  Johnson) and Beth Israel Deaconess Medical Center. It is also
                  known as Johnson and Johnson COVID-19 Vaccine and as COVID-19
                  Vaccine Janssen. Three countries, Denmark, Finland, and
                  Norway, discontinued the use of the Janssen vaccine in favor
                  of other available vaccines due to a possible link between the
                  vaccine and a rare blood clot disorder.
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Who Should Get Vaccinated?
                </Text>
                <Text>Recommended for people aged 18 years and older.</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Who Should NOT Get Vaccinated?
                </Text>
                <Text>
                  If you have had a severe allergic reaction (anaphylaxis) or an
                  immediate allergic reaction, even if it was not severe, to any
                  ingredientexternal icon in the J&J/Janssen COVID-19 Vaccine
                  (such as polysorbate), you should not get the J&J/Janssen
                  COVID-19 Vaccine. A severe allergic reaction is one that needs
                  to be treated with epinephrine or EpiPen or with medical care.
                  An immediate allergic reaction means a reaction within 4 hours
                  of exposure, including symptoms such as hives, swelling, or
                  wheezing (respiratory distress).
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Possible Side Effects:
                </Text>
                <Text>
                  Pain, Redness ,Swelling, Tiredness, Headache, Muscle pain,
                  Chills, Fever, Nausea.
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  viewStyle: {
    backgroundColor: "#4ecdc4",
    flex: 1,
    alignSelf: "center",
    top: 70,
    position: "absolute",
    flexDirection: "row",
    width: "92%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemStyle: {
    fontSize: 10,

    color: "#007aff",
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    color: "#007aff",
    fontSize: 14,
  },
  textStyle: {
    fontSize: 14,
    paddingLeft: 5,
  },
  ttstyle: {
    top: 190,
    position: "absolute",
    position: "absolute",
    width: "100%",
    textAlign: "justify",
    lineHeight: 50,
    backgroundColor: "#4ecdc4",
  },
  title: {
    position: "absolute",
    top: 50,
    width: "100%",
    backgroundColor: "#4ecdc4",
    paddingLeft: 5,
    paddingRight: 5,
  },
});
