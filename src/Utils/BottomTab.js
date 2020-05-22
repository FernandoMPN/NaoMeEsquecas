import 'react-native-gesture-handler'
import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Agendamento from '../Pages/Agendamento/Agendamento'
import Atendimento from '../Pages/Atendimento/Atendimento'
import Feedback from '../Pages/Feedback/Feedback'

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Agendamento" component={Agendamento} />
        <Tab.Screen name="Atendimento" component={Atendimento} />
        <Tab.Screen name="Feedback" component={Feedback} />
      </Tab.Navigator>
  );
}