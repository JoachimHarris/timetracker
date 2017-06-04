import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class BookmarkPlaces extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Bookmarks Places</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 65
    }
});

AppRegistry.registerComponent('BookmarkPlaces', () => BookmarkPlaces);
