import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Work extends Component {

    static defaultProps = {
        headline: 'Work'
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headline}>{this.props.headline}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        padding: '6%',
        backgroundColor: '#BE6D84',
        marginTop: 10
    },
    headline: {
        textAlign: 'center',
        color: '#fff',
        marginTop: 12
    }
});

AppRegistry.registerComponent('Work', () => Work);
