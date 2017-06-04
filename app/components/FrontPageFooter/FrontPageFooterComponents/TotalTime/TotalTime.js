import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import PageHeaderText from '../../../SharedComponents/PageHeaderText/PageHeaderText.js';

export default class TotalTime extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <PageHeaderText
                    headline = "Total time spend"
                    tagline ="Places you spend time"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
});

AppRegistry.registerComponent('TotalTime', () => TotalTime);
