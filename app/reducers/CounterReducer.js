/**
 * Author: GuoXC
 * Date: 2018-08-16 16:28
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image,
} from 'react-native';
import * as CounterTypes from "../common/CounterTypes";

const initialState = {
    sum: 0,
}
export default function count(state = initialState, action) {
    console.log('--count-- ' + state.sum);
    switch (action.type) {
        case CounterTypes.ADDITION:
            return {
                ...state,
                sum: state.sum + action.addNum,
            };
            break;
        case CounterTypes.SUBTRACTION:
            return {
                ...state,
                sum: state.sum - action.subNum,
            };
            break;
        default:
            return state;
    }

}
