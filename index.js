/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name} from './app.json';

// if (!__DEV__) {
//     global.console = {
//         info: () => {
//         },
//         log: () => {
//         },
//         warn: () => {
//         },
//         error: () => {
//         },
//     }
// }
// 关闭指定警告
// console.ignoredYellowBox = ['Warning: isMounted(...)',];

// 关闭全部的警告
// console.disableYellowBox = true;

AppRegistry.registerComponent(name, () => App);
