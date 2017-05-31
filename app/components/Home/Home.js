import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Switch, View } from 'react-native';

export default class Home extends Component {

    static defaultProps = {
        headline: 'Home'
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
        backgroundColor: '#6C5B7B',
        marginTop: 10,
        display: 'flex'
    },
    headline: {
        textAlign: 'center',
        color: '#fff',
        marginTop: 12
    }
});

AppRegistry.registerComponent('Home', () => Home);
