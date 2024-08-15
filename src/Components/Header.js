import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../res/common/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="menu" size={wp('6%')} color="black" />
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={require("../res/images/header.jpg")}
      />
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="notifications" size={wp('6%')} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
