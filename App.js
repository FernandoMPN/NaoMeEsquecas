import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native'

import Stack from './src/Utils/Stack'
import colors from './src/Utils/colors'

export default function App() {
    return (
        <>
            <StatusBar backgroundColor={colors.statusBar} barStyle={'light-content'} />
            <Stack/>
        </>
    );
}