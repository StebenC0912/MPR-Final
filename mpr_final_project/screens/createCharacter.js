import React, { useState, useEffect } from "react";
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
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore"; // Import Firestore

const CreateCharacter = ({ navigation, route }) => {
  const db = getFirestore(); // Initialize Firestore
  const { uid } = route.params;
  const [name, setName] = useState("");
  const gender = [
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
  ];
  const [pickedGender, setPickedGender] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [character, setCharacter] = useState(null); // Initialize state to store characters
  const [found, setFound] = useState(false);
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        // Fetch character data from Firestore based on UID
        const querySnapshot = await getDocs(collection(db, "characters"));
        querySnapshot.forEach((doc) => {
          const characterData = doc.data();
          // Check if the UID in the document matches the current user's UID
          if (characterData.uid === uid) {
            setIsFocus(true);
            setFound(true);
            if (characterData.gender === "Male") {
              setPickedGender(gender[0]);
            } else {
              setPickedGender(gender[1]);
            }
            setName(characterData.name);
            setCharacter(characterData);
            // You can set state or perform any other action with the character data here
          }
        });
      } catch (error) {
        console.error("Error fetching character:", error.message);
      }
    };

    fetchCharacter();
  }, [uid, db]);

  console.log("Character:", character);
  // Initialize Firestore

  const handleStartButton = async () => {
    if (name === "") {
      Alert.alert("Please enter a name");
      return;
    }
    if (pickedGender === "") {
      Alert.alert("Please choose a gender");
      return;
    }
    if (!found) {
      try {
        // Add a document to the "characters" collection
        const docRef = await addDoc(collection(db, "characters"), {
          name: name,
          gender: pickedGender.label,
          uid: uid,
        });
        console.log("Document written with ID: ", docRef.id);
        const eventsDocRef = await addDoc(collection(db, "events"), {
          id: uid,
          events: [],
        });
        console.log("Events document written with ID: ", eventsDocRef.id);

        navigation.navigate("Main", {
          name: name,
          id: uid,
          eventId: eventsDocRef.id,
        }); // Navigate after saving
      } catch (error) {
        console.error("Error writing document: ", error);
        Alert.alert("Error", "Unable to create character.");
      }
    } else if (name !== character.name || pickedGender.label !== character.gender) {
      try {
        // delete the existing character
        const querySnapshot = await getDocs(collection(db, "characters"));
        querySnapshot.forEach((doc) => {
          const characterData = doc.data();
          // Check if the UID in the document matches the current user's UID
          if (characterData.uid === uid) {
            deleteDoc(doc.ref);
          }
        });

        const docRef = await addDoc(collection(db, "characters"), {
          name: name,
          gender: pickedGender.label,
          uid: uid,
        });
        console.log("Document written with ID: ", docRef.id);
        const doc = await addDoc(collection(db, "events"), {
          id: uid,
          events: [],
        });
        navigation.navigate("Main", {
          name: name,
          id: uid,
          eventId: doc.id,
        }); // Navigate after saving
      } catch (error) {
        console.error("Error deleting character:", error.message);
      }
    } else {
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        const characterData = doc.data();
        // Check if the UID in the document matches the current user's UID
        if (characterData.id === uid) {
          navigation.navigate("Main", {
            name: name,
            id: uid,
            eventId: doc.id,
          });
        }
      });
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
                {isFocus ? "Continue" : "Start"} {name}'s Life
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.maleButton}>
          <TextInput
            placeholder="Name"
            onChangeText={(text) => {
              setName(text);
              setFound(false);
            }}
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
