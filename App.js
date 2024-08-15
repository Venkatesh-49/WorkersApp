import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import MaterialTabs from "react-native-material-tabs";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import Header from "./src/Components/Header";
import styles from "./src/res/common/styles";
import strings from "./src/res/common/string";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MaterialTabs
        items={[strings.welcomeScreen.WELCOME, strings.welcomeScreen.CATEGORIES]}
        uppercase={false}
        scrollable={false}
        barColor="white"
        indicatorColor="black"
        inactiveTextColor="#9E9EA8"
        activeTextColor="black"
        barHeight={35}
        selectedIndex={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      />

      <View style={styles.screenContainer}>
        {selectedIndex === 0 ? <WelcomeScreen /> : <CategoriesScreen />}
      </View>
    </SafeAreaView>
  );
}
