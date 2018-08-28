/**
 * Author: GuoXC
 * Date: 2018-08-10 14:43
 * des:
 */
import React from 'react';
import {Button, Platform} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashActivity from "../components/SplashActivity";
import Constants from "../common/Constants";
import HomeFragment from '../components/home/HomeFragment';
import HomeDetails from '../components/home/HomeDetails';
import NewsFragment from '../components/news/NewsFragment';
import NewsDetails from '../components/news/NewsDetails';
import MineFragment from '../components/mine/MineFragment';
import MyDetails from '../components/mine/MyDetails';
import LoginActivity from "../components/LoginActivity";


const homeTab = createStackNavigator({
    homeTab: {
        screen: HomeFragment,
        navigationOptions: ({navigation}) => ({
            header: null,
        })
    },
});
const newsTab = createStackNavigator({
    newsTab: {
        screen: NewsFragment,
    },
});
const mineTab = createStackNavigator({
    mineTab: {
        screen: MineFragment,
    },
});
const BottomTabNavigator = createBottomTabNavigator({
// export default createBottomTabNavigator({
    HomeFragment: {
        screen: homeTab,
        navigationOptions: (navigation) => TabOptions('首页', 'github-alt'),
    },
    NewsFragment: {
        screen: newsTab,
        navigationOptions: (navigation) => TabOptions('新闻', 'search'),
    },
    MineFragment: {
        screen: mineTab,
        navigationOptions: (navigation) => TabOptions('我的', 'user-circle'),
    },
}, {
    initialRouteName: 'HomeFragment',
    backBehavior: 'initialRoute',
    tabBarOptions: {
        style: {
            height: 49,
            backgroundColor: 'white'
        },
        showLabel: true,
        activeTintColor: Constants.lightBlue,//活动选项卡的标签和图标颜色。(选中)
        inactiveTintColor: '#aaa',//非活动选项卡的标签和图标颜色。(未选中)
        allowFontScaling: true,
    },
});

const screenConfigure = {
    SplashActivity: {screen: SplashActivity},
    LoginActivity: {screen: LoginActivity},
    MainActivity: {
        screen: BottomTabNavigator, navigationOptions: ({navigation}) => ({
            header: null,
            title: '首页',
        })
    },
    homeDetail: {screen: HomeDetails},
    NewsDetails: {screen: NewsDetails},
    MyDetails: {screen: MyDetails},
};

const stackConfigure = {
    initialRouteName: 'SplashActivity',
    navigationOptions: {
        // header: null,//全部使用自定义的,所以这里设为null,
        headerStyle: {
            backgroundColor: Constants.lightBlue,
        },
        headerTitleStyle: Constants.headerTitleStyle,
        headerBackImage: (<Ionicons
            name='ios-arrow-back'
            size={32}
            color='black'
            style={{marginLeft: 13}}
        />),
        gesturesEnabled: false,
        headerBackTitle: null,
    },
    // navigationOptions: StackOptions,
    headerMode: 'float',//定义如何呈现标题
    headerTransitionPreset: 'uikit',//指定标题在headerMode: float启用时应该如何从一个屏幕切换到另一个屏幕。

    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    mode: 'card',

};
export default AppRouter = createStackNavigator(screenConfigure, stackConfigure);

const TabOptions = (tabBarTitle, tabBarIconName) => {
    const title = tabBarTitle;
    const tabBarIcon = (({tintColor, focused}: { tintColor?: string, focused: boolean }) => {
        return (
            <Icon name={tabBarIconName} size={32} color={tintColor}/>);
    });
    const tabBarVisible = true;
    return {
        title, tabBarIcon, tabBarVisible,
        header: null,
    };
};
