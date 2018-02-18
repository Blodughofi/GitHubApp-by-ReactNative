import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView,
    StatusBar,
    RefreshControl,
} from 'react-native';

import ScollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import RepositoryCell from '../common/RepositoryCell';

import DataRepository from '../expand/dao/DataRepository';
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component{
    static navigationOptions ={
        headerTitle: '最热',
    };
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result : ''
        }
    }
    onLoad(){
        let url = this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    result : JSON.stringify(result)
                })
            .catch(error => {
                this.setState({
                    result:JSON.stringify(error)
                })
            })
            })
    }
    genUrl(key){
        return URL+key+QUERY_STR;
    }
    render(){
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#2196f3'
                    barStyle="light-content"
                />
                <ScollableTabView
                    tabBarBackgroundColor='#2196f3'
                    tabBarInactiveTextColor='mintcream'
                    tabBarActiveTextColor='white'
                    tabBarUnderlineStyle={{backgroundColor:'#e7e7e7',height:3}}
                    renderTabBar={() => <ScrollableTabBar/>}
                >
                    <PopularTab tabLabel='Java'>JAVA</PopularTab>
                    <PopularTab tabLabel='IOS'>IOS</PopularTab>
                    <PopularTab tabLabel='Android'>android</PopularTab>
                    <PopularTab tabLabel='JavaScript'>js</PopularTab>
                </ScollableTabView>
            </View>
        )
    }
}

class PopularTab extends Component{
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result : '',
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
            isLoading:false,
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        this.setState({
            isLoading:true,
        });
      let url = URL+this.props.tabLabel+QUERY_STR;
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(result.items),
                    isLoading:false,
                })
            .catch(error => {
                    console.log(error);
            })
            })
    }
    renderRow(data){
        return <RepositoryCell data={data} />
    }
    render(){
        return <View style={{flex:1}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={() => this.loadData()}
                        colors={['#2196f3']}
                        tintColor={'#2196f3'}
                        title={'Loading...'}
                        titleColor={'#2196f3'}
                    />
                }
            />
        </View>
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    tips : {
        fontSize : 20
    }
});