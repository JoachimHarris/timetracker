import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

import School from './app/components/School/School.js';
import Work from './app/components/Work/Work.js';
import Home from './app/components/Home/Home.js';

export default class TimeTracker extends Component {

    static defaultProps = {
        headline: 'Froost',
        tagline: 'Uptimize Your Time'
    }

    render() {
        return(
            <View style={styles.container}>
                    <Text style={styles.headline}>{this.props.headline}</Text>
                    <Text style={styles.tagline}>{this.props.tagline}</Text>
                    <School />
                    <Work />
                    <Home />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    headline: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 20,
        fontWeight: '200',
        color: 'grey'
    },
    tagline: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
        fontWeight: '100',
        color: 'grey'
    }
});

AppRegistry.registerComponent('TimeTracker', () => TimeTracker);
