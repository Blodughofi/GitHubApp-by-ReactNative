import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class CustomKeyPage extends Component{
    static navigationOptions ={
        headerTitle: '自定义标签',
        headerStyle:{
            backgroundColor:'#2196f3'
        },
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

        return (
                <View style={styles.container}>
                <Text style={styles.tips}>自定义标签</Text>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tips:{
        fontSize:29
    }
});