import React, { Component } from "react";
import render from "react";
import { Picker, View, Text, StyleSheet, ImageBackground } from "react-native";

export default class progressInMedicine extends Component {
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
        itemName: "Sinopharm",
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
              Pfizer, Sinopharm, Moderna, Sinovac, and Janssen).
            </Text>
          </View>
          <View>
            <Text style={styles.textStyle}> Categories</Text>
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
                  color="#527c88"
                  label={item.itemName}
                  value={item.itemName}
                  index={index}
                />
              ))}
            </Picker>
          </View>

          <View style={styles.ttstyle}>
            {this.state.selectedcat == "Sinopharm" ? (
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Sinopharm
                </Text>
                <Text>
                  The Sinopharm BIBP COVID-19 vaccine, also known as BBIBP-CorV,
                  the Sinopharm COVID-19 vaccine, or BIBP vaccine, is one of two
                  inactivated virus COVID-19 vaccines developed by Sinopharm's
                  Beijing Institute of Biological Products. It completed Phase
                  III trials in Argentina, Bahrain, Egypt, Morocco, Pakistan,
                  Peru, and the United Arab Emirates (UAE) with over 60,000
                  participants. Phase 3 trial has shown that 2 doses,
                  administered at an interval of 21 days, have an efficacy of
                  79% against symptomatic SARS-CoV-2 infection 14 or more days
                  after the second dose. Vaccine efficacy against
                  hospitalization was 79%.
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  "Who Should Get Vaccinated?
                </Text>
                <Text>Recommended for people 18 years and older.</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Who Should NOT Get Vaccinated?
                </Text>
                <Text>
                  Individuals with a history of anaphylaxis to any component of
                  the vaccine should not take it. Anyone with a body temperature
                  over 38.5ºC should postpone vaccination until they no longer
                  have a fever.
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Possible Side Effects:
                </Text>
                <Text>Headaches, fatigue, injection site reactions</Text>
              </View>
            ) : null}
            {this.state.selectedcat == "Sinovac" ? (
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Sinovac
                </Text>
                <Text>
                  Sinovac Biotech Ltd.is a Chinese biopharmaceutical company
                  that focuses on the research, development, manufacture, and
                  commercialization of vaccines that protect against human
                  infectious diseases. CoronaVac is an inactivated virus
                  COVID-19 vaccine developed by Sinovac. It has been in Phase
                  III clinical trials in Brazil, Chile, Indonesia, Philippines,
                  and Turkey. A large phase 3 trial in Brazil showed that two
                  doses, administered at an interval of 14 days, had an efficacy
                  of 51% against symptomatic SARS-CoV-2 infection, 100% against
                  severe COVID-19, and 100% against hospitalization starting 14
                  days after receiving the second dose.
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  "Who Should Get Vaccinated?
                </Text>
                <Text>Recommended for people 18 years and older.</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Who Should NOT Get Vaccinated?
                </Text>
                <Text>
                  Individuals with a history of anaphylaxis to any component of
                  the vaccine should not take it. Persons with acute
                  PCR-confirmed COVID-19 should not be vaccinated until after
                  they have recovered from acute illness and the criteria for
                  ending isolation have been met. Anyone with a body temperature
                  over 38.5°C should postpone vaccination until they no longer
                  have a fever.
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Possible Side Effects:
                </Text>
                <Text>
                  Redness, soreness, swelling, chills, fatigue, joint pain,
                  headache, mild fever, muscle aches.
                </Text>
              </View>
            ) : null}
            {this.state.selectedcat == "AstraZeneca" ? (
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  AstraZeneca
                </Text>
                <Text>
                  The Oxford–AstraZeneca COVID-19 vaccine, codenamed AZD1222,
                  and sold under the brand names Covishield and Vaxzevria.
                  Developed in the United Kingdom by the Oxford University and
                  British-Swedish company AstraZeneca, it is given by
                  intramuscular injection. A study in Scotland found that, for
                  symptomatic COVID-19 infection after the second dose, the
                  vaccine is 81% effective against the Alpha variant, and 61%
                  against the Delta variant. The AZD1222 vaccine against
                  COVID-19 has an efficacy of 63.09% against symptomatic
                  SARS-CoV-2 infection. Longer dose intervals within the 8 to 12
                  weeks range are associated with greater vaccine efficacy.
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  "Who Should Get Vaccinated?
                </Text>
                <Text>Recommended for people 18 years and older.</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Who Should NOT Get Vaccinated?
                </Text>
                <Text>
                  People with a history of severe allergic reaction to any
                  component of the vaccine should not take it. The vaccine is
                  not recommended for persons younger than 18 years of age
                  pending the results of further studies.
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Possible Side Effects:
                </Text>
                <Text>
                  Redness, soreness, swelling, chills, fatigue, joint pain,
                  headache, mild fever, muscle aches.
                </Text>
              </View>
            ) : null}
            {this.state.selectedcat == "Pfizer" ? (
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>PFIZER</Text>
                <Text>
                  The Pfizer–BioNTech COVID-19 vaccine, also known as Comirnaty,
                  is an mRNA vaccine produced by the German company BioNTech and
                  the American company Pfizer. The Pfizer BioNTech vaccine
                  against COVID-19 has an efficacy of 95% against symptomatic
                  SARS-CoV-2 infection.
                </Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  "Who Should Get Vaccinated?
                </Text>
                <Text>Recommended for people 12 years and older.</Text>
                <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  Who Should NOT Get Vaccinated?
                </Text>
                <Text>
                  If you have had a severe allergic reaction (anaphylaxis) or an
                  immediate allergic reaction, even if it was not severe, to any
                  ingredient in the Pfizer-BioNTech COVID-19 vaccine (such as
                  polyethylene glycol), you should not get this vaccine. If you
                  had a severe or immediate allergic reaction after getting the
                  first dose of a Pfizer-BioNTech COVID-19 vaccine, you should
                  not get a second dose of either of this vaccine. A severe
                  allergic reaction is one that needs to be treated with
                  epinephrine or EpiPen or with medical care. An immediate
                  allergic reaction means a reaction within 4 hours of exposure,
                  including symptoms such as hives, swelling, or wheezing
                  (respiratory distress). If you aren’t able to get this
                  vaccine, you may still be able to get a different type of
                  COVID-19 vaccine.
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
            {this.state.selectedcat == "Moderna" ? (
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
                  Innovations. The Moderna vaccine has been shown to have an
                  efficacy of approximately 94.1% in protecting against
                  COVID-19, starting 14 days after the first dose.
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
                  ingredient in an mRNA COVID-19 vaccine (such as polyethylene
                  glycol), you should not get an mRNA COVID-19 vaccine. If you
                  had a severe or immediate allergic reaction after getting the
                  first dose of an mRNA COVID-19 vaccine, you should not get a
                  second dose of either of the mRNA COVID-19 vaccines (Moderna
                  or Pfizer-BioNTech). A severe allergic reaction is one that
                  needs to be treated with epinephrine or EpiPen or with medical
                  care.
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
                  ingredientexternal icon in the J and J/Janssen COVID-19
                  Vaccine (such as polysorbate), you should not get the J
                  andJ/Janssen COVID-19 Vaccine. A severe allergic reaction is
                  one that needs to be treated with epinephrine or EpiPen or
                  with medical care. An immediate allergic reaction means a
                  reaction within 4 hours of exposure, including symptoms such
                  as hives, swelling, or wheezing (respiratory distress).
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
  cont: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  viewStyle: {
    backgroundColor: "#cccccc",
    flex: 0.25,
    alignSelf: "center",
    top: 70,
    position: "absolute",
    flexDirection: "row",
    width: "92%",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  itemStyle: {
    fontSize: 10,

    color: "#527c88",
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    color: "#527c88",
    fontSize: 14,
  },
  textStyle: {
    fontSize: 14,
    paddingLeft: 5,
  },
  ttstyle: {
    top: 170,
    position: "absolute",
    position: "absolute",
    width: "100%",
    textAlign: "justify",
    lineHeight: 50,
    backgroundColor: "#aabec6",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    position: "absolute",
    top: 50,
    width: "100%",
    backgroundColor: "#aabec6",
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
