import 'react-native-gesture-handler'
import * as React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import Store from './src/Store/Store'
import Stack from './src/Utils/Stack'
import colors from './src/Utils/colors';

import {AppRegistry, Text, TextInput} from 'react-native';
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
if (TextInput.defaultProps == null) TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;


export default function App() {

    return (
        <>
            <Provider store={ Store }>
                <StatusBar backgroundColor={colors.statusBar} barStyle={'light-content'} />
                <Stack/>
            </Provider>
            
        </>
    );
}