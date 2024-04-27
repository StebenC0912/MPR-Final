import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq4IhbwrqWvt_5qfRhT3sO3THoVCJt4aw",
  authDomain: "i-am-a-developer-9b27b.firebaseapp.com",
  projectId: "i-am-a-developer-9b27b",
  storageBucket: "i-am-a-developer-9b27b.appspot.com",
  messagingSenderId: "235934729461",
  appId: "1:235934729461:web:76ce89c232c818dfec71bc",
  measurementId: "G-7HCWM7CXLS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function AuthenticationScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.uid); // Fetch user data on auth state changed
      }
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Set user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        // Add any additional fields
      });
      console.log("User created and data saved!");
      navigation.navigate("CreateCharacter");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!");
      navigation.navigate("CreateCharacter", {uid: auth.currentUser.uid});
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const fetchUserData = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("User data:", userData);
        // Set user data to state/context here if needed
      } else {
        console.log("No user data found!");
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const handleAuthentication = () => {
    if (isLogin) {
      handleLogin(email, password);
    } else {
      handleSignUp(email, password);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>{isLogin ? "Sign In" : "Sign Up"}</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <Button
          title={isLogin ? "Sign In" : "Sign Up"}
          onPress={handleAuthentication}
          color="#3498db"
        />
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Sign In"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  toggleText: {
    color: "#3498db",
    textAlign: "center",
    marginTop: 20,
  },
  bottomContainer: {
    marginTop: 20,
  },
});
