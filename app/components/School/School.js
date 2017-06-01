import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class School extends Component {

    static defaultProps = {
        headline: 'School'
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={[styles.boxContainer, styles.boxSchool]}>
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
    boxSchool: {
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

AppRegistry.registerComponent('School', () => School);
