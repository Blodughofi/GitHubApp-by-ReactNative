/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    Image,
    View
} from 'react-native';

import PopularPage from '../pages/PopularPage';
import MyPage from './my/MyPage'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomePage extends Component {
    static navigationOptions ={
        headerTitle: '最热',
        headerStyle:{
            backgroundColor:'#2196f3'
        },
        headerTitleStyle:{
            color: '#fff',
            alignSelf: 'center'
        },
        headerTintColor : '#fff',
        headerBackTitle:null,
        gesturesEnabled:false,
        headerRight: (<View></View>),
        cardStack: {
            gesturesEnabled: false,
        },
    };
    constructor(props){
        super(props);
        this.state={
            selectedTab: 'tb_popular'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_popular'}
                        selectedTitleStyle={{color:'#2196f3'}}
                        title='最热'
                        renderIcon={ ()=> <Image style={styles.image} source={require('../../res/images/ic_polular.png')} />}
                        renderSelectedIcon={ () => <Image style={[styles.image,{tintColor:'#2196f3'}]} source={require('../../res/images/ic_polular.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_popular'})}>
                        <PopularPage />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        selectedTitleStyle={{color:'yellow'}}
                        title='趋势'
                        renderIcon={ ()=> <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                        renderSelectedIcon={ () => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/ic_trending.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_trending'})}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        selectedTitleStyle={{color:'red'}}
                        title='收藏'
                        renderIcon={ ()=> <Image style={styles.image} source={require('../../res/images/ic_favorite.png')} />}
                        renderSelectedIcon={ () => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_favorite.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_favorite'})}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        selectedTitleStyle={{color:'yellow'}}
                        title='我的'
                        renderIcon={ ()=> <Image style={styles.image} source={require('../../res/images/ic_my.png')} />}
                        renderSelectedIcon={ () => <Image style={[styles.image,{tintColor:'yellow'}]} source={require('../../res/images/ic_my.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_my'})}>
                        <MyPage {...this.props}></MyPage>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1:{
        flex:1,
        backgroundColor:'red',
    },
    page2:{
        flex:1,
        backgroundColor:'yellow',
    },
    image:{
        height:22,
        width:22
    }
});
