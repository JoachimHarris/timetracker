import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class School extends Component {

    static defaultProps = {
        headline: 'School'
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={Actions.schoolmap}>
                    <View style={[styles.boxContainer, styles.boxSchool]}>
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
    boxSchool: {
        height: 80,
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '6%',
        backgroundColor: '#BE6D84'
    },
    headline: {
        textAlign: 'center',
        color: '#fff'
    }
});

AppRegistry.registerComponent('School', () => School);
