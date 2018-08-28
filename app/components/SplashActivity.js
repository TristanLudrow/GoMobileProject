/**
 * Author: GuoXC
 * Date: 2018-08-13 10:56
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackActions, NavigationActions} from 'react-navigation'
import {connect} from 'react-redux';
import * as loginAction from "../actions/LoginAction";

class SplashActivity extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this._jump2Login();
    }

    componentDidMount() {
        // this._jump2Login();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.welcome}>
                        启动页
                    </Text>
                    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => {
                        this._jump2Login();
                    }}>
                        <Text style={{fontFamily: 'Arial', fontSize: 15}}>跳转到登录页</Text>
                    </Icon.Button>
                </View>
            </View>
        );
    }

    _jump2Login() {
        const resetToMain = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'LoginActivity'})]
            }
        );
        this.props.navigation.dispatch(resetToMain);
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

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        logIn: () => dispatch(loginAction.logIn()),
    })
)(SplashActivity)
// module.exports = SplashActivity;