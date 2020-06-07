import React, { useState, useEffect } from 'react'
import {BackHandler, Alert} from 'react-native'

import CompleteStage from './CompleteStage'
import UserDataStage from './UserDataStage'
import UserPreferencesStage from './UserPreferencesStage'
import UserTypeStage from './UserTypeStage'
import UserFreeTimeStage from './UserFreeTimeStage'
import ReviewStage from './ReviewStage'

import Loading from '../../Components/Loading/Loading'
import axios from 'axios'

const RegisterStages = {
    UserData: 1,
    UserPreferences: 2,
    UserType: 3,
    UserFreeTime: 4,
    Review: 5,
    Complete: 6
}

export const dayOfWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]
export const hours = [8,9,10,11,12,13,14,15,16,17,18,19]

export const getTextDate = (day, time) => {

    const endTime = time + 1

    return dayOfWeek[day] + ', ' + time + '-' + endTime + 'h'
}

function RegisterPaciente({ navigation }){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [userPreferences, setPreferences] = useState('')
    const [userType, setUserType] = useState('')
    const [userFreetime, setUserFreetime] = useState([])

    const [currentStage, setStage] = useState(RegisterStages.UserData)
    const [isLoading, setLoadingVisibilty] = useState(false)

    const backControl = () => {

        switch(currentStage){
            case RegisterStages.UserData:
                navigation.goBack()
                break
            case RegisterStages.UserPreferences:
                setStage(RegisterStages.UserData)
                break
            case RegisterStages.UserType:
                setStage(RegisterStages.UserPreferences)
                break
            case RegisterStages.UserFreeTime:
                setStage(RegisterStages.UserType)
                break
            case RegisterStages.Review:
                setStage(RegisterStages.UserFreeTime)
                break
            case RegisterStages.Complete:
                navigation.navigate('Home')
                break
            default:
                throw new Error('Undefined stage at Register screen (switchView)')
        }

        return true

    }

    useEffect(() => {

        BackHandler.addEventListener("hardwareBackPress", backControl)

        return function cleanup(){
            BackHandler.removeEventListener("hardwareBackPress", backControl)
        }

    },[currentStage])


    const getUserPreferenceCode = () => {

        if(userPreferences === "Homens"){
            return 1
        }else if(userPreferences === "Mulheres"){
            return 2
        }else if(userPreferences === "Indiferente"){
            return 3
        }else{
            throw new Error('Preference code undefined')
        }

    }

    const registerPatient = () => {

        setLoadingVisibilty(true)

        const userData = {
            name: username,
            email: email,
            perfil: userType,
            preferenciaAtendimento: getUserPreferenceCode(),
            preferenciaHorario: userFreetime
        }

        axios.post('https://naoesquecasback.herokuapp.com/pacientes', userData)
            .then(response => {
                setLoadingVisibilty(false)
                switchView()
            })
            .catch(error => {
                setLoadingVisibilty(false)
                Alert.alert('Algo deu errado', 'Por favor, tente enviar novamente. Caso o erro persista, entre em contato conosco.')
            })

    }

    const switchView = () => {

        switch(currentStage){
            case RegisterStages.UserData:
                setStage(RegisterStages.UserPreferences)
                return
            case RegisterStages.UserPreferences:
                setStage(RegisterStages.UserType)
                return
            case RegisterStages.UserType:
                setStage(RegisterStages.UserFreeTime)
                return
            case RegisterStages.UserFreeTime:
                setStage(RegisterStages.Review)
                return
            case RegisterStages.Review:
                setStage(RegisterStages.Complete)
                return
            case RegisterStages.Complete:
                navigation.navigate('MainPage')
                return
            default:
                throw new Error('Undefined stage at Register screen (switchView)')
        }
                
    }

    const getView = () => {

        switch(currentStage){
            case RegisterStages.UserData:
                return <UserDataStage username={username} email={email} setEmail={setEmail} setUsername={setUsername} next={switchView}/>
            case RegisterStages.UserPreferences:
                return <UserPreferencesStage username={username} preferencesCallback={setPreferences} next={switchView}/>
            case RegisterStages.UserType:
                return <UserTypeStage userTypeCallback={setUserType} next={switchView}/>
            case RegisterStages.UserFreeTime:
                return <UserFreeTimeStage userFreetimeCallback={setUserFreetime} next={switchView}/>
            case RegisterStages.Review:
                return <ReviewStage username={username} email={email} userType={userType} preference={userPreferences} hours={userFreetime} next={registerPatient}/>
            case RegisterStages.Complete:
                return <CompleteStage username={username} next={switchView}/>
            default:
                throw new Error('Undefined stage at Register screen (getView)')
        }

    }

    return(
        <>
        {getView()}
        {isLoading? <Loading/>:null}
        </>
    )

}

export default RegisterPaciente