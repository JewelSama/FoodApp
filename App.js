import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"
          backgroundColor={colors.statusBar}
      />

      {/* <SignInScreen /> */}
      {/* <SignInWelcomeScreen /> */}

    <RootNavigator />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
