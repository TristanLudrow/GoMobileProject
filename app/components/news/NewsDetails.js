/**
 * Author: GuoXC
 * Date: 2018-08-13 14:56
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image, Button,
} from 'react-native';

export default class NewsDetails extends Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '新闻页详情',
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.welcome}>
                        新闻详情页
                    </Text>
                </View>
            </View>
        );
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
module.exports = NewsDetails;