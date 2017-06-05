import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class FrontPageFooter extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={Actions.userinfo}>
                    <Icon name="user-o" size={20} color="grey" style={styles.iconFooter}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.totaltime}>
                    <Icon name="clock-o" size={20} color="grey" style={styles.iconFooter}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.calendardays}>
                    <Icon name="calendar-o" size={20} color="grey" style={styles.iconFooter}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.bookmarkplaces}>
                    <Icon name="bookmark-o" size={20} color="grey" style={styles.iconFooter}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'blue',
        marginTop: 60
    },
    iconFooter: {
        padding: '2%',
        fontSize: 20,
        color: '#d5e4e8'
    }
});

AppRegistry.registerComponent('FrontPageFooter', () => FrontPageFooter);
