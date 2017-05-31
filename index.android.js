import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import School from './app/components/School/School.js';

export default class TimeTracker extends Component {
    render() {
        return(
            <View>
                <School />
            </View>
        )
    }
}

AppRegistry.registerComponent('TimeTracker', () => TimeTracker);
