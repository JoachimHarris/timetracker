import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class About extends Component {

    static defaultProps = {
        headline: 'About'
    }

    render() {
        return(
            <View style={styles.container}>
                    <Text style={styles.headline}>{this.props.headline}</Text>
                    <Text style={styles.headline}>{this.props.headline}</Text>
                    <Text style={styles.headline}>{this.props.headline}</Text>
                    <Text style={styles.headline}>{this.props.headline}</Text>
                    <Text style={styles.headline}>{this.props.headline}</Text>
                    <Text style={styles.headline}>{this.props.headline}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headline: {
        textAlign: 'center',
        color: '#fff'
    }
});

AppRegistry.registerComponent('About', () => About);
