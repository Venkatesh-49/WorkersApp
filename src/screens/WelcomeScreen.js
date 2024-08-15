import React from 'react';
import { View, Text } from 'react-native';
import strings from '../res/common/string';
import styles from '../res/common/styles';

const WelcomeScreen = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>{strings.welcomeScreen.WELCOME}</Text>
    </View>
  );
};

export default WelcomeScreen;
