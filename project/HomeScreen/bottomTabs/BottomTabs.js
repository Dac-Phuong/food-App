import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Search from './Search/Search';
import SettingsScreen from './SettingsScreen';
import Account from './Account';
import Favourite from './Favourite';
import MyCart from './MyCart';
import ProductDetail from '../../infoProduct/ProductDetail';



const Tab = createBottomTabNavigator();

function BottomTab(){
    return(
                <Tab.Navigator
                    initialRouteName='Home'

                    screenOptions={{headerShown: false}}>
                    <Tab.Screen name='Home' component={HomeScreen}/>
                    <Tab.Screen name='Search' component={Search}/>
                    <Tab.Screen name='MyCart' component={MyCart} />
                    <Tab.Screen name='Favourite' component={Favourite}/>
                    <Tab.Screen name='Account' component={Account}/>
                    <Tab.Screen name='SettingsScreen' component={ProductDetail} />
                </Tab.Navigator>
    )
}
export default BottomTab;
