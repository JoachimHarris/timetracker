import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import App from './app/App.js';

export default class Froost extends Component {

    render() {
        return(
            <View style={styles.container}>
                <App />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

AppRegistry.registerComponent('Froost', () => Froost);
