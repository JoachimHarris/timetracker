import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

import School from './app/components/School/School.js';
import Work from './app/components/Work/Work.js';
import Home from './app/components/Home/Home.js';

export default class TimeTracker extends Component {
    render() {
        return(
            <View style={styles.container}>
                    <Text style={styles.headline}>Uptimize Time</Text>
                    <School />
                    <Work />
                    <Home />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 80,
        fontWeight: '200',
        color: 'grey'
    },
    container: {
        width: '100%',
        height: '100%',
        padding: '6%',
        backgroundColor: '#fff'
    }
});

AppRegistry.registerComponent('TimeTracker', () => TimeTracker);
