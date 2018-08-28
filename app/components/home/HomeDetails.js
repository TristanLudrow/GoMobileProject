/**
 * Author: GuoXC
 * Date: 2018-08-10 10:49
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image,
} from 'react-native';

import {createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constants from "../../common/Constants";


export default class HomeDetails extends React.Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '首页详情',
    });

    constructor(props) {
        super(props);
        console.log('--HomeDetails-- constructor');
    }

    componentWillMount() {
        console.log('--HomeDetails-- componentWillMount');
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
                </Icon.Button>
                <Ionicons
                    name='ios-arrow-back'
                    size={30}
                    color='black'
                    style={{marginLeft: 13}}
                />
            </View>
        );
    }

    componentDidMount() {
        console.log('--HomeDetails-- componentDidMount');
    }

    componentDidUpdate() {
        console.log('--HomeDetails-- componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('--HomeDetails-- componentWillUnmount');
    }
}

module.exports = HomeDetails;