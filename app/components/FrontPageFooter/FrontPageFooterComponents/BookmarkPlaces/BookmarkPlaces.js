import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import PageHeaderText from '../../../SharedComponents/PageHeaderText/PageHeaderText.js';

export default class BookmarkPlaces extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <PageHeaderText
                    headline = "Bookmarked places"
                    tagline ="Fast Track Places"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {}
});

AppRegistry.registerComponent('BookmarkPlaces', () => BookmarkPlaces);
