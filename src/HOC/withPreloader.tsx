import React, {Component} from 'react';
import {ActivityIndicator} from "react-native";

interface WithPreloaderProps {
    isLoading: boolean;
}

const withPreloader = <P extends object>(Component: React.ComponentType<P>) =>
    class WithPreloader extends React.Component<P & WithPreloaderProps> {
        render() {
            const { isLoading, ...props } = this.props;
            return isLoading
                ? <ActivityIndicator size="large" color="#0000ff" />
                : <Component {...props as P} />
        }
    };

export default withPreloader;
