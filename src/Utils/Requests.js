import axios from 'axios'

import Store from '../Store/Store'

const request = axios.create({
    baseURL: 'https://naoesquecasback.herokuapp.com',
    timeout: 1000,
    timeoutErrorMessage: 'Tempo limite atingido'
})

async function cadastroDePsicologo(name, email, cfp, preferenciaHorario, sexo) {

    const response = request({
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

    return response

}

async function loginDePsicologo(email, password) {

    const response = await request({
        method: 'post',
        url: '/loginPsicos',
        data: {
            email,
            password
        }
    }) 

    return response

}

async function cadastroDePaciente(name, email, perfil, preferenciaAtendimento, preferenciaHorario) {

    const response = request({
        method: 'post',
        url: '/pacientes',
        data: {
            name,
            email,
            perfil,
            preferenciaAtendimento,
            preferenciaHorario
        }
    })

    return response

}

async function loginDePaciente(email, password) {

    const response = await request({
        method: 'post',
        url: '/loginPacientes',
        data: {
            email,
            password
        }
    })

    return response
}

async function reenviarCodigo(email, type) {

    const url = type == 'Psicologo' ? `/forgotPsico/${email}` : `/forgotPaciente/${email}`

    const response = await request({
        method: 'put',
        url
    })

    return response

}

async function enviarFeedback(conteudo) {
    const state = Store.getState().loginReducer
    
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
    })

    return response
}

async function atualizarPreferenciaHorario(preferenciaHorario) {
    const state = Store.getState().loginReducer
    
    if(!state.isLogged)
        return

    const url = (state.user.type == 'Psicologo' ? '/psicos/horario/' : '/pacientes/horario/') + state.user.id


    const response = await request({
        method: 'put',
        url,
        data: {
            preferenciaHorario
        },
        headers: {
            Authorization: `Bearer ${state.token}`
        }
    })

    return response
}

async function receberProximaConsulta() {
    const state = Store.getState().loginReducer
    
    if(!state.isLogged)
        return

    const url = (state.user.type == 'Psicologo' ? '/conversasPsico/' : '/conversasPaciente/') + state.user.id + '?efetuada=false'

    const response = await request({
        method: 'get',
        url,
        headers: {
            Authorization: `Bearer ${state.token}`
        }
    })

    return response
}

export default Requests = {

    cadastroDePsicologo,
    loginDePsicologo,
    cadastroDePaciente,
    loginDePaciente,
    reenviarCodigo,
    enviarFeedback,
    atualizarPreferenciaHorario,
    receberProximaConsulta

}
