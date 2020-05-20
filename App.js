/**
*
 * TODO: FERNANDO fazer npx pod-install ios
 **/

import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button } from 'react-native'

import BottomTab from './src/Utils/BottomTab'
import Stack from './src/Utils/Stack'

export default function App() {
  const [navegador, setNavegador] = React.useState(true)
  return (
     navegador ? <BottomTab/> : <Stack/>
  );
}