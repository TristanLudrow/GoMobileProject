/**
 * Author: GuoXC
 * Date: 2018-08-14 14:30
 * des:
 */
'use strict';
import * as Types from "../common/LoginTypes";

let user = {
    name: '张三',
    age: 24,
};

function isLogining() {
    return {
        type: Types.LOGIN_DOING
    }
}

function loginSuccess(b) {
    console.log('loginSuccess');
    return {
        type: Types.LOGIN_DONE,
        user: user,
    }
}

function loginFailed(b) {
    console.log('loginFailed');
    return {
        type: Types.LOGIN_ERROR,
        user: user,
    }
}

function logoutFailed(b) {
    console.log('logoutFailed');
    return {
        type: Types.LOGIN_ERROR,
        user: user,
    }
}

function logoutSuccess(b) {
    console.log('logoutSuccess');
    return {
        type: Types.LOGOUT_DONE,
        user: user,
    }
}

//访问登录接口 根据返回结果来划分action属于哪个type,
export function logIn(userName, pwd) {
    console.log('登录方法--' + userName + '-' + pwd);
    return dispatch => {
        dispatch(isLogining());//分发正在登陆状态
        setTimeout(() => {
            let result = fetch('https://www.baidu.com/').then((res) => {
                dispatch(loginSuccess(true));
            }).catch(() => {
                dispatch(loginFailed(false))
            })
        }, 1500);
    }
}

export function userNameInput(userName) {
    console.log('userNameInput---' + userName);
    // return dispatch => {
    //     dispatch({
    //         type: Types.LOGIN_USERNAME_INPUT,
    //         userName: userName,
    //     })
    // }
    return {
        type: Types.LOGIN_USERNAME_INPUT,
        userName: userName,
    }
}

export function userpwdInput(pwd) {
    console.log('userpwdInput---' + pwd);
    // return dispatch => {
    //     dispatch({
    //         type: Types.LOGIN_PWD_INPUT,
    //         pwd: pwd,
    //     })
    // }
    return {
        type: Types.LOGIN_PWD_INPUT,
        pwd: pwd,
    }
}

function isLogOut() {
    return {
        type: Types.LOGOUT_DOING
    }
}

export function logOut(userName, pwd) {
    console.log('登出方法--' + userName + '-' + pwd);
    return dispatch => {
        dispatch(isLogOut());//分发正在登出状态
        setTimeout(() => {
            let result = fetch('https://www.baidu.com/').then((res) => {
                dispatch(logoutSuccess(true));
            }).catch(() => {
                dispatch(logoutFailed(false))
            })
        }, 1000);
    }
}
