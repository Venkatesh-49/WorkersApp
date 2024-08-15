import React from "react";
import {  Text, Image, View } from "react-native";
import styles from "../res/common/styles";


const WorkerProfile = ({ profile }) => {
  return (
    <View style={styles.workProfileContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: profile.profileImage }} style={styles.image} />
        <Image
          source={{ uri: profile.countryFlag }}
          style={styles.flag}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.name}>{profile.name}</Text>
    </View>
  );
};

export default WorkerProfile;
