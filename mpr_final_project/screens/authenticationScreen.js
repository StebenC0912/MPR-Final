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
  firebase,
} from "@firebase/auth";

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

const AuthScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
}) => {
  return (
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
      <View style={styles.buttonContainer}>
        <Button
          title={isLogin ? "Sign In" : "Sign Up"}
          onPress={handleAuthentication}
          color="#3498db"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Need an account? Sign Up"
            : "Already have an account? Sign In"}
        </Text>
      </View>
    </View>
  );
};

export default function AuthenticationScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        navigation.navigate("CreateCharacter", { uid: auth.currentUser.uid });
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User signed in successfully!");
          navigation.navigate("CreateCharacter", { uid: auth.currentUser.uid });
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created successfully!");
          setIsLogin(true); // Switch to login mode
          setEmail(""); // Clear email field
          setPassword(""); // Clear password field
        }
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AuthScreen
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        handleAuthentication={handleAuthentication}
      />
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
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: "#3498db",
    textAlign: "center",
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});
