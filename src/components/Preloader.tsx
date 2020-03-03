import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

const Preloader = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff"/>
    </View>
);

export default Preloader;
