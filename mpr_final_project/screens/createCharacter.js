import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
const CreateCharacter = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const gender = [
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
  ];
  const [pickedGender, setPickedGender] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const handleStartButton = () => {
    if (name === "") {
      Alert.alert("Please enter a name");
    } else if (pickedGender === "") {
      Alert.alert("Please choose a gender");
    } else {
      navigation.navigate("Main", { name: name });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.firstLine}>
          <Image
            source={require("./../assets/images/tree.png")}
            style={styles.image}
          />
          <Text style={styles.text1}>New Life</Text>
        </View>
        <Text style={styles.text2}>Start a new life</Text>

        <View style={styles.maleButton}>
          <TouchableOpacity onPress={handleStartButton}>
            <View style={styles.button1}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "OrelegaOne",
                  fontSize: 16,
                }}
              >
                Start {name}'s Life
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.maleButton}>
          <TextInput
            placeholder="Name"
            onChangeText={setName}
            value={name}
            style={styles.textinput}
          />
        </View>

        <View style={styles.maleButton}>
          <Dropdown
            selectedTextStyle={{
              color: "#6B7682",
              fontFamily: "OrelegaOne",
              fontSize: 16,
              textAlign: "center",
            }}
            style={{
              width: 320,
              height: 70,
              backgroundColor: "#F6C2F3",
              borderWidth: 7,
              borderColor: "#FFFFFF",
              borderRadius: 70,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              alignSelf: "center",
              fontFamily: "OrelegaOne",
              paddingLeft: 10,
            }}
            data={gender}
            labelField={"label"}
            valueField={"value"}
            value={pickedGender}
            placeholder={!isFocus ? "Select Gender" : "..."}
            onChange={(value) => setPickedGender(value)}
            placeholderStyle={StyleSheet.create({
              fontSize: 16,
              color: "#6B7682",
              fontFamily: "OrelegaOne",
              textAlign: "center",
            })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    flexDirection: "row",
    height: 70,
    width: 320,
    backgroundColor: "#F6C2F3",
    borderWidth: 7,
    borderColor: "#FFFFFF",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "OrelegaOne",
  },
  container: {
    flex: 1,
    backgroundColor: "#C1C9D6",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    width: 354,
    height: 556,
    backgroundColor: "#D6EEF0",
  },
  firstLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: 50,
  },
  image: {
    width: 28,
    height: 28,
  },
  text1: {
    fontFamily: "ChelseaMarket",
    fontSize: 16,
    color: "#FF6D60",
    paddingLeft: 5,
  },
  text2: {
    fontFamily: "ChelseaMarket",
    fontSize: 16,
    color: "#FF6D60",
    textAlign: "center",
    top: 80,
  },
  button1: {
    flexDirection: "row",
    height: 70,
    width: 320,
    backgroundColor: "#1DBA42",
    borderWidth: 7,
    borderColor: "#FFFFFF",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    flexDirection: "row",
    height: 70,
    width: 320,
    backgroundColor: "#FCA9F7",
    borderWidth: 7,
    borderColor: "#FFFFFF",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  maleButton: {
    display: "flex",
    alignItems: "center",
    top: 150,
    marginBottom: 20,
  },
  femaleButton: {
    display: "flex",
    alignItems: "center",
    top: 210,
  },
});

export default CreateCharacter;
