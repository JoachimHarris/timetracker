import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

    static defaultProps = {
        headline: 'Home'
    }

    render() {

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={Actions.about}>
                    <View style={[styles.boxContainer, styles.boxHome]}>
                        <Text style={styles.headline}>{this.props.headline}</Text>
                    </View>
                </TouchableOpacity>
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
        backgroundColor: '#F67280'
    },
    headline: {
        textAlign: 'center',
        color: '#fff'
    }
});

AppRegistry.registerComponent('Home', () => Home);
