import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class WorkMap extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>WorkMap</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        paddingTop: 70
    }
});

AppRegistry.registerComponent('WorkMap', () => WorkMap);
