import React, {Component} from 'react';
import {StyleSheet, View, Text} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24
    }
});

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Something went wrong.
                    </Text>
                </View>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
