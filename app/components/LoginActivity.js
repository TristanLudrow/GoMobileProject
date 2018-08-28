/**
 * Author: GuoXC
 * Date: 2018-08-14 10:55
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackActions, NavigationActions} from 'react-navigation'
import {connect} from 'react-redux';
import * as loginAction from "../actions/LoginAction";
import LoadingSpinner from "../widget/LoadingSpinner";
import {userpwdInput} from "../actions/LoginAction";
import {userNameInput} from "../actions/LoginAction";

//引入connect函数

class LoginActivity extends Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '登录',
    });

    constructor(props) {
        super(props);
        this.state = {
            userName: '你好',
            pwd: '不好',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        //判断什么情况需要重新render(),
        console.log('---LoginActivity---shouldComponentUpdate'
            + nextProps.status + '---'
            + nextProps.isSuccess + '---'
            + 'this.props.isLoading ' + this.props.isLoading);
        if (nextProps.status === '登录成功' && nextProps.isSuccess) {
            console.log('_jump2Main');
            this._jump2Main();
            return false;
        }
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log('---LoginActivity---componentWillReceiveProps'
            + 'this.props.userName---' + this.props.userName
            + '---this.props.pwd ' + this.props.pwd);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.welcome}>
                        登录页
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        // onChangeText={(text) => userNameInput(text)}
                        onChangeText={(text) => {
                            this.setState({
                                userName: text,
                            });
                        }}
                        value={this.state.userName}
                    />
                    <TextInput
                        style={styles.textInput}
                        // onChangeText={(text) => userpwdInput(text)}
                        onChangeText={(text) => {
                            this.setState({
                                pwd: text,
                            });
                        }}
                        value={this.state.pwd}
                    />

                    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => {
                        this.pressedLogin();
                    }} style={styles.buttonView}>
                        <Text style={styles.buttonText}>登录</Text>
                    </Icon.Button>

                    <Text style={[styles.buttonText, {marginTop: 32}]}>{'当前状态 :' + this.props.status}</Text>
                </View>
                <LoadingSpinner isVisible={this.props.isLoading}/>
            </View>
        );
    }

    _jump2Main() {
        const resetToMain = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'MainActivity'})]
            }
        );
        this.props.navigation.dispatch(resetToMain);
    }

    pressedLogin() {
        const {logIn} = this.props;
        let userName = this.state.userName;
        let pwd = this.state.pwd;
        console.log('---pressedLogin---' + userName + '  ' + pwd);
        logIn(userName, pwd);
        // this._jump2Main();
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
        paddingLeft: 16,
        paddingRight: 16,
    },
    noMsgImg: {
        width: 150,
        height: 150,
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 16
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Arial',
        fontSize: 15,
        textAlign: 'center'
    },
});

/**
 * 多reducer内选择不同的reducer
 * 页面内实现组件和store的关联,之所以能够实现不同的组件关联不同的state也是在这一步进行的
 */

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
        isLoading: state.loginIn.isLoading,
        // userName: state.loginIn.userName,
        // pwd: state.loginIn.pwd,
    }),
    (dispatch) => ({
        logIn: () => dispatch(loginAction.logIn()),
        userNameInput: () => dispatch(loginAction.userNameInput(this.state.userName)),
        userpwdInput: () => dispatch(loginAction.userpwdInput(this.state.pwd))
    })
)(LoginActivity)