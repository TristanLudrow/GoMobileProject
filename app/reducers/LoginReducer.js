/**
 * Author: GuoXC
 * Date: 2018-08-14 15:02
 * des:
 */
'use strict';
import * as Types from "../common/LoginTypes";

const initialState = {
    status: '点击登录',
    isSuccess: false,
    user: null,
    isLoading: false,
    userName: '你好',
    pwd: '不好'
};

export default function loginIn(state = initialState, action) {
    console.log('LoginReducer---loginIn--' + JSON.stringify(state));
    if (action.type) {
        switch (action.type) {
            case Types.LOGIN_DOING:
                return {
                    ...state,
                    status: '正在登录',
                    isSuccess: false,
                    user: null,
                    isLoading: true,
                };
                break;
            case Types.LOGIN_DONE:
                return {
                    ...state,
                    status: '登录成功',
                    isSuccess: true,
                    user: action.user,
                    isLoading: false,
                };
                break;
            case Types.LOGIN_ERROR:
                return {
                    ...state,
                    status: '登录出错',
                    isSuccess: true,
                    user: null,
                    isLoading: false,
                };
                break;
            case Types.LOGOUT_DOING:
                return {
                    ...state,
                    status: '正在登出',
                    isSuccess: false,
                    user: null,
                    isLoading: true,
                };
                break;
            case Types.LOGOUT_DONE:
                return {
                    ...state,
                    status: '登出成功',
                    isSuccess: false,
                    user: null,
                    isLoading: false,
                };
                break;
            case Types.LOGIN_USERNAME_INPUT:
                return {
                    ...state,
                    userName: action.userName,
                };

                break;
            case Types.LOGIN_PWD_INPUT:
                return {
                    ...state,
                    pwd: action.pwd,
                };
                break;
            default:
                // console.log('---default---');
                return state;
        }
    } else {
        return state;
    }
}
