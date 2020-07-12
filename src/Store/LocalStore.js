import AsyncStorage from '@react-native-community/async-storage'

const storeUserID = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@UserID', jsonValue)
    } catch (e) {
      console.log("Erro ao salvar o id :(")
    }
}

const storeUserType = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@UserType', jsonValue)
    } catch (e) {
      console.log("Erro ao salvar o tipo de usuario :(")
    }
}

const storeUserEmail = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@UserEmail', jsonValue)
    } catch (e) {
      console.log("Erro ao salvar o tipo de usuario :(")
    }
}

const getUserID = async () => {
    try {
      const value = await AsyncStorage.getItem('@UserID')
      console.log(value)
      if(value !== null) {
        return value
      }else{
          return null
      }
    } catch(e) {
        console.log("Erro ao ler o id :(")
    }
}

const getUserType = async () => {
    try {
      const value = await AsyncStorage.getItem('@UserType')
      if(value !== null) {
        return value
      }else{
        return null
      }
    } catch(e) {
        console.log("Erro ao ler o tipo :(")
    }
}

const getUserEmail = async () => {
    try {
      const value = await AsyncStorage.getItem('@UserEmail')
      if(value !== null) {
        return value
      }
    } catch(e) {
        console.log("Erro ao ler o tipo :(")
    }
}

export default LocalStore = {

    storeUserID,
    storeUserType,
    storeUserEmail,
    getUserID,
    getUserType,
    getUserEmail

}