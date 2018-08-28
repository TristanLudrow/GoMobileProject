/**
 * Author: GuoXC
 * Date: 2018-08-16 16:27
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image,
} from 'react-native';
import * as CounterTypes from "../common/CounterTypes";

export function add(num) {
    return {
        type: CounterTypes.ADDITION,
        addNum: num,
    }
}

export function sub(num) {
    return {
        type: CounterTypes.SUBTRACTION,
        subNum: num,
    }
}