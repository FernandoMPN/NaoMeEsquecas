import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { loginAction, logoutAction } from '../Store/Ducks/auth'


const request = axios.create({
    baseURL: 'https://naoesquecasback.herokuapp.com',
    timeout: 1000,
    timeoutErrorMessage: 'Tempo limite atingido'
})

export async function CadastroDePsicologo(name, email, cfp, preferenciaHorario, sexo) {
    const response = await request({
        method: 'post',
        url: '/psicos',
        data: {
            name,
            email,
            cfp,
            preferenciaHorario,
            sexo
        }
    }).then( response => { return response.data } )
    .catch( error => { console.log({error}); return {error: 'error'} })

    console.log(response)

}

export async function LoginDePsicologo(email, password) {
    const dispatch = useDispatch()

    const response = await request({
        method: 'post',
        url: '/loginPsicos',
        data: {
            email,
            password
        }
    })  .then( response => { 
            dispatch(loginAction(response.data.token, 'Psicologo', response.data.name, response.data.id))
            return response.data
        })
        .catch( error => { return error })

    console.log(response)
}

export async function CadastroDePaciente(name, email, cfp, preferenciaHorario, sexo) {
    const response = await request({
        method: 'post',
        url: '/pacientes',
        data: {
            name,
            email,
            cfp,
            preferenciaHorario,
            sexo
        }
    }).then( response => { return response.data } )
    .catch( error => { console.log({error}); return {error: 'error'} })

    console.log(response)
}

export async function LoginDePaciente(email, password) {
    const response = await request({
        method: 'post',
        url: '/loginPacientes',
        data: {
            email,
            password
        }
    })  .then( response => { 
            useDispatch(loginAction(response.data.token, 'Paciente', response.data.name, response.data.id))
            return response.data
        })
        .catch( error => { return error })

    console.log(response)
}

export async function ReenviarCodigo(email) {
    const state = useSelector(state => state)

    const url = state.user.type == 'Psicologo' ? `/forgotPsico/${email}` : `/forgotPaciente/${email}`

    const response = await request({
        method: 'put',
        url
    })  .then( response => { return response.data })
        .catch( error => { return error })

    console.log(response)
}

export async function SendFeedback(conteudo) {
    const state = useSelector(state => state)
    
    if(!state.isLogged)
        return
    
    const data = state.user.type == 'Psicologo' ? { psicoId: state.user.id, conteudo } : { pacienteId: state.user.id, conteudo }

    const response = await request({
        method: 'post',
        url: '/feedbacks',
        data,
        headers: {
            Authorization: `Bearer ${state.token}`
        }
    })  .then( response => {
            return response.data
        })
        .catch( error => { return error } )

    console.log(response)
}
