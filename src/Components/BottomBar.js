import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from "../res/common/styles";
import strings from "../res/common/string";

const BottomBar = () => {
  const [selectedTab, setSelectedTab] = useState(strings.bottomBar.CHAT);

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarIconButton}
        onPress={() => handleTabPress(strings.bottomBar.CHAT)}
      >
        {selectedTab === strings.bottomBar.CHAT && <View style={styles.selectedLine} />}
        <Ionicons
          name="chatbubbles-outline"
          size={wp('6%')}
          color={selectedTab === strings.bottomBar.CHAT ? '#e6ac00' : 'black'}
        />
        <Text style={[styles.iconText, selectedTab === strings.bottomBar.CHAT && styles.selectedText]}>
          {strings.bottomBar.CHAT}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarIconButton}
        onPress={() => handleTabPress(strings.bottomBar.CALL)}
      >
        {selectedTab === strings.bottomBar.CALL && <View style={styles.selectedLine} />}
        <Ionicons
          name="call-outline"
          size={wp('6%')}
          color={selectedTab === strings.bottomBar.CALL ? '#e6ac00' : 'black'}
        />
        <Text style={[styles.iconText, selectedTab === strings.bottomBar.CALL && styles.selectedText]}>
          {strings.bottomBar.CALL}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarIconButton}
        onPress={() => handleTabPress(strings.bottomBar.SCAN)}
      >
        {selectedTab === strings.bottomBar.SCAN && <View style={styles.selectedLine} />}
        <Ionicons
          name="qr-code-outline"
          size={wp('6%')}
          color={selectedTab === 'Scan' ? '#e6ac00' : 'black'}
        />
        <Text style={[styles.iconText, selectedTab === strings.bottomBar.SCAN && styles.selectedText]}>
          {strings.bottomBar.SCAN}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarIconButton}
        onPress={() => handleTabPress(strings.bottomBar.WISHLIST)}
      >
        {selectedTab === strings.bottomBar.WISHLIST && <View style={styles.selectedLine} />}
        <Ionicons
          name="heart-outline"
          size={wp('6%')}
          color={selectedTab === strings.bottomBar.WISHLIST ? '#e6ac00' : 'black'}
        />
        <Text style={[styles.iconText, selectedTab === strings.bottomBar.WISHLIST && styles.selectedText]}>
          {strings.bottomBar.WISHLIST}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarIconButton}
        onPress={() => handleTabPress(strings.bottomBar.VIP)}
      >
        {selectedTab === strings.bottomBar.VIP && <View style={styles.selectedLine} />}
        <Ionicons
          name="ticket-outline"
          size={wp('6%')}
          color={selectedTab === strings.bottomBar.VIP  ? '#e6ac00' : 'black'}
        />
        <Text style={[styles.iconText, selectedTab === strings.bottomBar.VIP && styles.selectedText]}>
          {strings.bottomBar.VIP}
        </Text>
      </TouchableOpacity>
    </View>
  );
};



export default BottomBar;