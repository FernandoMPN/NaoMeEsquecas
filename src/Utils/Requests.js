import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { loginAction, logoutAction } from '../Store/Ducks/auth'

class Requests {
    request = axios.create({
        baseURL: 'https://naoesquecasback.herokuapp.com',
        timeout: 1000,
        timeoutErrorMessage: 'Tempo limite atingido'
    })

    async cadastroDePsicologo(name, email, cfp, preferenciaHorario, sexo) {
        const response = await this.request({
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

    async loginDePsicologo(email, password) {
        const response = await this.request({
            method: 'post',
            url: '/loginPsicos',
            data: {
                email,
                password
            }
        })  .then( response => { 
                useDispatch(loginAction(response.token, 'Psicologo', response.name, response.id))
                return response.data
            })
            .catch( error => { return error })

        console.log(response)
    }

    async cadastroDePaciente(name, email, cfp, preferenciaHorario, sexo) {
        const response = await this.request({
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

    async loginDePaciente(email, password) {
        const response = await this.request({
            method: 'post',
            url: '/loginPacientes',
            data: {
                email,
                password
            }
        })  .then( response => { 
                useDispatch(loginAction(response.token, 'Paciente', response.name, response.id))
                return response.data
            })
            .catch( error => { return error })

        console.log(response)
    }

    async reenviarCodigo(email) {
        const state = useSelector(state => state)

        const url = state.user.type == 'Psicologo' ? `/forgotPsico/${email}` : `/forgotPaciente/${email}`

        const response = await this.request({
            method: 'put',
            url
        })  .then( response => { return response.data })
            .catch( error => { return error })

        console.log(response)
    }

    async sendFeedback(conteudo) {
        const state = useSelector(state => state)
        
        if(!state.isLogged)
            return
        
        const data = state.user.type == 'Psicologo' ? { psicoId: state.user.id, conteudo } : { pacienteId: state.user.id, conteudo }

        const response = await this.request({
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
}

export default Requests