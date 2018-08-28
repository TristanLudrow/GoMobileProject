/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import AppRouter from './app/route/router';
import {Provider} from 'react-redux';
import configureStore from './app/store/ConfigureStore';

const store = configureStore();

/**
 * react-redux介绍
 * 阮一峰博客：http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
 * React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）。
 * UI:
 * 只负责 UI 的呈现，不带有任何业务逻辑
 * 没有状态（即不使用this.state这个变量）
 * 所有数据都由参数（this.props）提供
 * 不使用任何 Redux 的 API
 * 容器：
 * 负责管理数据和业务逻辑，不负责 UI 的呈现
 * 带有内部状态
 * 使用 Redux 的 API
 */
/**
 * Provider详解。
 * 他是react-redux提供的，用来让子组件可以通过props直接拿到state了。
 * （注：如果不用react-redux,就需要一层一层的传值，十分繁琐。）
 * Provider用法。用他包裹住整个app组件，他的子组件就全部可以通过props拿到state了。
 */
export default class App extends Component {
    render() {
        return (<Provider store={store}>
                <AppRouter/>
            </Provider>
        );
    }
}