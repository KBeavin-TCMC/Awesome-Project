import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
const test = require('react-native-dotenv');
const Google = require('expo-google-app-auth');
//import { OAUTH2_GOOGLE_ANDROID_KEY } from 'react-native-dotenv';
//import * as Google from "expo-google-app-auth";

let authenticated = false;

const AuthScreen = () => {
  return (
    <View style={styles.authScreen}>
      <Text>Authentication!!!!!!!!!</Text>
      <Button title="Authenticate" onPress={signIn} />
    </View>
  );
};

const signIn = async () => {
  try {
    console.log(process.env.OAUTH2_GOOGLE_ANDROID_KEY);
    const result = await Google.logInAsync({
      androidClientId: process.env.OAUTH2_GOOGLE_ANDROID_KEY,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      console.log(result);
      authenticated = true;

      return result.accessToken;
    } else {
      console.log("cancelled");
    }
  } catch (e) {
    console.log("error", e);
  }
};

const styles = StyleSheet.create({
  authScreen: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthScreen;
