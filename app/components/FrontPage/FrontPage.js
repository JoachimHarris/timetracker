import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Home from '../Home/Home.js';
import School from '../School/School.js';
import Work from '../Work/Work.js';
import AddCustom from '../AddCustom/AddCustom.js';
import FrontPageFooter from '../FrontPageFooter/FrontPageFooter.js';

export default class FrontPage extends Component {

    static defaultProps = {
        headline: 'Froost',
        tagline: 'Uptimize Your Time'
    }

    render() {

        return(
            <View style={styles.container}>
                <Text style={styles.headline}>{this.props.headline}</Text>
                <Text style={styles.tagline}>{this.props.tagline}</Text>
                <Home />
                <School />
                <Work />
                <FrontPageFooter />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    headline: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 120,
        marginBottom: 20,
        fontWeight: '200',
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

AppRegistry.registerComponent('FrontPage', () => FrontPage);
