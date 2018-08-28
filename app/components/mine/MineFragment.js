/**
 * Author: GuoXC
 * Date: 2018-08-10 15:25
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image, Button,
} from 'react-native';
import Constants from "../../common/Constants";

export default class MineFragment extends Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '我的',
        headerStyle: Constants.headerStyle,
        headerTitleStyle: Constants.headerTitleStyle,
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.welcome}>
                        我的页面
                    </Text>
                    <Button
                        onPress={() => {
                            this.detailPressed();
                        }}
                        title="jump2Details"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }

    detailPressed() {
        this.props.navigation.push('MyDetails');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    contentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noMsgImg: {
        width: 150,
        height: 150,
        alignItems: 'center'
    },
});
module.exports = MineFragment;