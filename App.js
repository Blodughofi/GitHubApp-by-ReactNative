/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';

import HomePage from './js/pages/HomePage';
import WelcomePage from './js/pages/WelcomPage';
import MyPage from "./js/pages/my/MyPage";
import CustomKeyPage from "./js/pages/my/CustomKeyPage";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class AppScreen extends Component{
    static navigationOptions ={
        title: 'success',
        headerTitleStyle:{
            color: '#fff',
            alignSelf: 'center'
        },
        headerTintColor : '#fff',
        headerBackTitle:null,
        cardStack: {
                     gesturesEnabled: true,
             },
    };

    render(){
        const {navigate} =this.props.navigation;
        return (
            <View>
                <Text>success</Text>
                <Button
                    onPress={()=>{ navigate('Welcome',{name:'sht'})}}
                    title='AppScreen'
                />
            </View>
        )
    }
}

const AppNavigator=StackNavigator({
    AppScreen: {screen: AppScreen},
    Welcome: {screen: WelcomePage},
    Home: {screen: HomePage},
    Mypage:{screen:MyPage},
    CustomKeyPage:{screen:CustomKeyPage}
});

class App extends Component{
    render(){
        return <AppNavigator/>;
    }
}

export default App