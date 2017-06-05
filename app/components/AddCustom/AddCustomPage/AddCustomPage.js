import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import PageHeaderText from '../../SharedComponents/PageHeaderText/PageHeaderText.js';

export default class AddCustomPage extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <PageHeaderText
                    headline = "Add Custom Place"
                    tagline ="Track your favorite places"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
});

AppRegistry.registerComponent('AddCustomPage', () => AddCustomPage);
