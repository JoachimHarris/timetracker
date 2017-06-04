import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class UserInfo extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>User Info</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65
    }
});

AppRegistry.registerComponent('UserInfo', () => UserInfo);
