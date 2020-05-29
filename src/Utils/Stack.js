import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home/Home'
import LoginPsico from '../Pages/LoginPsico/LoginPsico'
import LoginPaciente from '../Pages/LoginPaciente/LoginPaciente'
import LoginPacienteLanding from '../Pages/LoginPaciente/LoginPacienteLanding';
import LoginPacienteError from '../Pages/LoginPaciente/LoginPacienteError';
import RegisterPaciente from '../Pages/RegisterPaciente/RegisterPaciente';
import LoginPacienteResend from '../Pages/LoginPaciente/LoginPacienteResend';
import BottomTab from './BottomTab'
import CadastroPsico from '../Pages/CadastroPsico/CadastroPsico'

const StackNav = createStackNavigator();

function Stack() {
    return (
        <NavigationContainer>
        <StackNav.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <StackNav.Screen name="Home" component={ Home } />

            <StackNav.Screen name="LoginPsico" component={ LoginPsico } />
            <StackNav.Screen name="CadastroPsico" component={ CadastroPsico } />
            <StackNav.Screen name="LoginPacienteLanding" component={ LoginPacienteLanding } />
            <StackNav.Screen name="LoginPaciente" component={ LoginPaciente } />
            <StackNav.Screen name="LoginPacienteError" component={ LoginPacienteError } />
            <StackNav.Screen name="LoginPacienteResend" component={ LoginPacienteResend } />

            <StackNav.Screen name="RegisterPaciente" component={ RegisterPaciente } />

            <StackNav.Screen name="MainPage" component={ BottomTab } />
        </StackNav.Navigator>
        </NavigationContainer>
    );
}

export default Stack