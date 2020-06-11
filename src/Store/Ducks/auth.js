export const Types = {
    LOGIN: 'auth/LOGIN',
    LOGOUT: 'auth/LOGOUT',
}

const initialState = {
    isLogged: false,
    token: null,
    user: {
        type: '', //[Psicologo, Paciente]
        name: '',
        id: ''
    },
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOGIN:
            return { 
                isLogged: true,
                token: action.payload.token,
                user: { 
                    type: action.payload.userType, //[Psicologo, Paciente]
                    name: action.payload.userName,
                    id: action.payload.userId
                }
            }
        case Types.LOGOUT:
            return initialState
        default:
            return state
    }
}
  
  // Action Creators
  
export function loginAction(token, userType, userName, userId) {
    return {
        type: Types.LOGIN,
        payload: {
            token,
            userType,
            userName,
            userId
        }
    }
}

export function logoutAction() {
    return {
        type: Types.LOGOUT
    }
}
