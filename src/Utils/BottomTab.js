import 'react-native-gesture-handler'
import * as React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Configuracao from '../Pages/Configuracao/Configuracao'
import Atendimento from '../Pages/Atendimento/Atendimento'
import Feedback from '../Pages/Feedback/Feedback'

const configurationIcon = require('../Assets/Icons/configuration/configuration.png')
const configurationFocusedIcon = require('../Assets/Icons/configuration/configuration-focused.png')
const consultIcon = require('../Assets/Icons/consult/consult.png')
const consultFocusedIcon = require('../Assets/Icons/consult/consult-focused.png')
const feedbackIcon = require('../Assets/Icons/feedback/feedback.png')
const feedbackFocusedIcon = require('../Assets/Icons/feedback/feedback-focused.png')

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
        <Tab.Navigator
            tabBarOptions={{ showLabel: false, keyboardHidesTabBar: true, style: Styles.tab }}
            screenOptions={ ({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let icon, height, width
                    switch (route.name) {
                        case 'Configuracao':
                            icon = focused ? configurationFocusedIcon : configurationIcon
                            height = 31
                            width = 30.15
                            break

                        case 'Atendimento':
                            icon = focused ? consultFocusedIcon : consultIcon
                            height = 31
                            width = 28
                            break
                    
                        case 'Feedback':
                            icon = focused ? feedbackFocusedIcon : feedbackIcon
                            height = 31
                            width = 28
                            break

                        default:
                            break
                    }
                    return <Image source={ icon } style={{ height, width }} />
                }
              })}
            >
            <Tab.Screen name="Atendimento" component={Atendimento} />
            <Tab.Screen name="Feedback" component={Feedback} />
            <Tab.Screen name="Configuracao" component={Configuracao} />
        </Tab.Navigator>
  )
}

const Styles = StyleSheet.create({
    tab: {
        height: '9%',
        width: '100%',
        backgroundColor: '#CBB0D9',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22
    }
})