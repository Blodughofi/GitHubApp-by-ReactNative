import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
//import NavigationBar from '../common/NavigationBar';
import HomePage from './HomePage';
//import {StackNavigator} from "react-navigation";

export default class WelcomePage extends Component{
    static navigationOptions ={
      title: 'Welcome',
        headerTitle: '最热',
        headerBackTitle:null,
        cardStack: {
            gesturesEnabled: true,
        },
    };
    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.props.navigation.navigate('Home',{name:'sht'})
        },2000);
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    render(){

        return (
                <View>
                <Text>欢迎</Text>
                </View>
        )
    }
}
