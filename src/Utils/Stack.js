import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home/Home'
import LoginPsico from '../Pages/LoginPsico/LoginPsico'

const StackNav = createStackNavigator();

function Stack() {
    return (
        <NavigationContainer>
        <StackNav.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <StackNav.Screen name="Home" component={ Home } />
            <StackNav.Screen name="LoginPsico" component={ LoginPsico } />
        </StackNav.Navigator>
        </NavigationContainer>
    );
}

export default Stack