/**
 * Author: GuoXC
 * Date: 2018-08-16 16:34
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, Button,
} from 'react-native';
import PropTypes from 'prop-types';

export default class CounterButtons extends Component {
    static propTypes = {
        addFunc: PropTypes.func.isRequired,
        subFunc: PropTypes.func.isRequired,
        sum: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);
    }


    render() {
        console.log('counter');
        console.log(this.props);
        const {addFunc, subFunc, sum} = this.props;
        return (
            <View style={styles.container}>
                <Button onPress={subFunc} title={'减'}/>
                <Text style={styles.label}>{sum}</Text>
                <Button onPress={addFunc} title={'加'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    label: {
        width: 40,
        textAlign: 'center',
    }
});
module.exports = CounterButtons;