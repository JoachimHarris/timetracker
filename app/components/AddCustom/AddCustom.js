import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class AddCustom extends Component {

    static defaultProps = {
        headline: 'Home'
    }

    render() {

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={Actions.homemap}>
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
        height: 60,
        borderRadius: 2,
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '4%',
        backgroundColor: 'lightgrey'
    },
    headline: {
        textAlign: 'center',
        color: '#333'
    }
});

AppRegistry.registerComponent('AddCustom', () => AddCustom);
