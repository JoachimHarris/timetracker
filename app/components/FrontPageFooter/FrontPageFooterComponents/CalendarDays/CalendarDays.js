import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import PageHeaderText from '../../../SharedComponents/PageHeaderText/PageHeaderText.js';

export default class CalendarDays extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <PageHeaderText
                    headline = "Calendar Days"
                    tagline = "Choose a day to see"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
});

AppRegistry.registerComponent('CalendarDays', () => CalendarDays);
