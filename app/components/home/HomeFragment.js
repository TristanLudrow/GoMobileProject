/**
 * Author: GuoXC
 * Date: 2018-08-09 17:05
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image,
    Platform, Button,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation'
import GoMobileModules from '../../widget/GoMobileModule';
import Constants from "../../common/Constants";
import {connect} from 'react-redux';
import * as loginAction from "../../actions/LoginAction";
import * as Types from "../../common/LoginTypes";
import LoadingSpinner from "../../widget/LoadingSpinner";
import CounterButtons from "../../widget/CounterButtons";
import * as CounterAction from "../../actions/CounterAction";
import * as PlatformOS from "react-native";

class HomeFragment extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('---HomeFragment---shouldComponentUpdate ' + 'this.props.isLoading ' + this.props.isLoading);
        if (nextProps.status === '登出成功') {
            this._reset2Login();
            return false;
        }
        return true;
    }

    render() {
        const {logOut, addFunc, subFunc, sum} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.welcome}>
                        首页
                    </Text>
                    <TouchableOpacity onPress={() => {
                        this._getFromNative();
                    }} style={styles.touchView}><Text
                        style={styles.touchText}>{' get values from native '}</Text></TouchableOpacity>
                    <Button
                        onPress={() => {
                            this.detailPressed();
                        }}
                        title="jump2Details"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <CounterButtons addFunc={addFunc} subFunc={subFunc} sum={sum}/>
                    <Text>当前登录状态:{this.props.status}</Text>
                    <Button
                        onPress={() => {
                            logOut();
                            // dispatch({
                            //     type: Types.LOGOUT_DONE,
                            //     user: null,
                            // })
                        }}
                        title="退出登录"
                        color="#f00"
                    />
                </View>
                <LoadingSpinner isVisible={this.props.isLoading}/>
            </View>

        );
    }

    _getFromNative() {
        const rnParam = Platform.select({
            ios: 'str from ios',
            android: 'str from android'
        });
        GoMobileModules.getNativeGo(rnParam, (str) => {
            alert(str);
        });
    }

    detailPressed() {
        this.props.navigation.push('homeDetail');
    }

    _reset2Login() {
        const resetToLogin = StackActions.reset({
            index: 0,
            key: null,//如果不设置会报There is no route for the key
            actions: [NavigationActions.navigate({routeName: 'LoginActivity'})]
        });
        this.props.navigation.dispatch(resetToLogin)
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
    touchView: {
        height: 59,
        margin: 10,
        backgroundColor: '#ccc',
        justifyContent: 'center'
    },
    touchText: {
        color: '#333333',
        fontSize: 18,
        padding: 8,
        textAlignVertical: 'center'
    },
});
export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
        isLoading: state.loginIn.isLoading,
        sum: state.counter.sum,
    }),
    (dispatch) => ({
        logOut: () => dispatch(loginAction.logOut()),
        addFunc: () => dispatch(CounterAction.add(2)),
        subFunc: () => dispatch(CounterAction.sub(2)),

    })
)(HomeFragment)
// module.exports = HomeFragment;