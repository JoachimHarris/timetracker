import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class PageHeaderText extends React.Component {

    static defaultProps = {
        headline: 'Headline here',
        tagline: 'Tagline here'
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headline}>{this.props.headline}</Text>
                <Text style={styles.tagline}>{this.props.tagline}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    headline: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 120,
        marginBottom: 20,
        fontWeight: '300',
        color: 'grey'
    },
    tagline: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 60,
        fontWeight: '100',
        color: 'grey'
    }
});

AppRegistry.registerComponent('PageHeaderText', () => PageHeaderText);
