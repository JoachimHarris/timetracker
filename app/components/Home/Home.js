import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Switch, View } from 'react-native';

export default class Home extends Component {

    static defaultProps = {
        headline: 'Home'
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={[styles.boxContainer, styles.boxHome]}>
                    <Text style={styles.headline}>{this.props.headline}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    boxContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxHome: {
        height: 80,
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '6%',
        backgroundColor: '#6C5B7B'
    },
    headline: {
        textAlign: 'center',
        color: '#fff'
    }
});

AppRegistry.registerComponent('Home', () => Home);
