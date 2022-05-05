import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Icon } from "react-native-elements";
import HomeHeader from '../components/HomeHeader';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
            <HomeHeader />



    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})