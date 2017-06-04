import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import PageHeaderText from '../../../SharedComponents/PageHeaderText/PageHeaderText.js';

export default class UserInfo extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <PageHeaderText
                    headline = "User Info"
                    tagline = "Your Time Information"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
});

AppRegistry.registerComponent('UserInfo', () => UserInfo);
