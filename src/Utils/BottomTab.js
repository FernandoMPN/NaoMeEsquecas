import 'react-native-gesture-handler'
import * as React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Agendamento from '../Pages/Agendamento/Agendamento'
import Atendimento from '../Pages/Atendimento/Atendimento'
import Feedback from '../Pages/Feedback/Feedback'

const calendarIcon = require('../Assets/Icons/calendar/calendar.png')
const calendarFocusedIcon = require('../Assets/Icons/calendar/calendar-focused.png')
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
                    let icon
                    switch (route.name) {
                        case 'Agendamento':
                            icon = focused ? calendarFocusedIcon : calendarIcon
                            break

                        case 'Atendimento':
                            icon = focused ? consultFocusedIcon : consultIcon
                            break
                    
                        case 'Feedback':
                            icon = focused ? feedbackFocusedIcon : feedbackIcon
                            break

                        default:
                            break
                    }
                    return <Image source={ icon } style={{ height:31, width:28 }} />
                }
              })}
            >
            <Tab.Screen name="Agendamento" component={Agendamento} />
            <Tab.Screen name="Atendimento" component={Atendimento} />
            <Tab.Screen name="Feedback" component={Feedback} />
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