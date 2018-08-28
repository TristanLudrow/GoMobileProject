/**
 * Author: GuoXC
 * Date: 2018-08-07 17:01
 * des: 调用本地桥接组件,用于全局调用,使用方法:
 *  import GoMobileModule from "./GoMobileModule";
 *  GoMobileModule.show("Awesome", ToastExample.SHORT);
 */
import {NativeModules} from 'react-native';

module.exports = NativeModules.GoMobileModule;