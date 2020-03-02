import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from "./src/services/rootReducer";
import Main from "./src/containers/Main";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <Main/>
            </SafeAreaView>
        </Provider>
    );
}
