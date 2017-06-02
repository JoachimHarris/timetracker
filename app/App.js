import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Router from './Router.js';

export default class TimeTracker extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Router />
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

AppRegistry.registerComponent('TimeTracker', () => TimeTracker);
