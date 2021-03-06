import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class AddCustom extends Component {

    static defaultProps = {
        headline: 'Add Custom Place'
    }

    render() {

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={Actions.addcustompage}>
                    <View style={[styles.boxContainer, styles.boxAddCustomPage]}>
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
    boxAddCustomPage: {
        height: 30,
        borderRadius: 2,
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '10%'
    },
    headline: {
        textAlign: 'center',
        color: '#ccc'
    }
});

AppRegistry.registerComponent('AddCustom', () => AddCustom);
