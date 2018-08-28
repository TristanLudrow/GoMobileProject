/**
 * Author: GuoXC
 * Date: 2018-08-10 15:24
 * des:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image, Button, FlatList,
} from 'react-native';
import Constants from "../../common/Constants";

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
export default class NewsFragment extends Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '新闻列表',
        headerStyle: Constants.headerStyle,
        headerTitleStyle: Constants.headerTitleStyle,
    });

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                let data = [];
                let temp;
                let len = responseData.movies.length;
                for (let i = 0; i < len; i++) {
                    temp = {
                        key: i + '',
                        value: responseData.movies[i]
                    };
                    data[i] = temp;
                }
                this.setState({
                    data: this.state.data.concat(data),
                    loaded: true,
                });
            });
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderMovie.bind(this)}
                style={styles.list}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.welcome}>
                        {'新闻列表页'}
                    </Text>
                    <Text>
                        {'正在加载电影数据……'}
                    </Text>
                    <Button
                        onPress={() => {
                            this.detailPressed();
                        }}
                        title="jump2Details"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    };

    renderMovie({item}) {
        console.log(item.key + '--' + item.value.posters.thumbnail);
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={{uri: item.value.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.value.title}</Text>
                    <Text style={styles.year}>{item.value.year}</Text>
                </View>
            </View>
        );
    }

    detailPressed() {
        this.props.navigation.push('NewsDetails');
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
    itemContainer: {
        height: 97,
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: 'row',
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center"
    },
    year: {
        textAlign: "center"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    list: {
        paddingTop: 20,
        backgroundColor: "#F5FCFF"
    }
});
module.exports = NewsFragment;