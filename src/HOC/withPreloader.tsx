import React, {Component} from 'react';
import Preloader from "../components/Preloader";

interface WithPreloaderProps {
    isLoading: boolean;
}

const withPreloader = <P extends object>(Component: React.ComponentType<P>) =>
    class WithPreloader extends React.Component<P & WithPreloaderProps> {
        render() {
            const {isLoading, ...props} = this.props;
            return isLoading
                ? <Preloader/>
                : <Component {...props as P} />
        }
    };

export default withPreloader;
