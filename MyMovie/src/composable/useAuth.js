import {computed} from 'vue';
import { API_BASE_URL, API_READ_ACCESS_TOKEN, API_VERSION } from '@/constants/api-constants'
import {
  CREATE_REQUEST_TOKEN_URL,
  CREATE_SESSION_URL,
  VALIDATE_WITH_LOGIN_URL,
  ACCOUNT_URL
} from '@/constants/endpoints'

export function useAuth(app) {
    const LOGIN = 'login'
    const USER = 'user'
    
    const userID = computed({
        get : () => JSON.parse(sessionStorage.getItem(USER) || 'null'),
        set : (val) => sessionStorage.setItem(USER, JSON.stringify(val))
    })
    
    async function createRequestToken() {
        const res = fetch(`${API_BASE_URL}${API_VERSION}${CREATE_REQUEST_TOKEN_URL}`, {
            method : 'GET',
            headers : {
                accept: 'application/json',
                Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`  
            }
        });
        const data = await ((await res).json())
        if (!data.success) {
            throw new Error('Creating request token failed.')
        }
        return data.request_token
    }

    async function validateWithLogin(requestToken, username, password){
        const res = fetch(`${API_BASE_URL}${API_VERSION}${VALIDATE_WITH_LOGIN_URL}`, {
            method : 'POST',
            headers : {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`  
            },
            body : JSON.stringify({
                username : username,
                password : password,
                request_token: requestToken
            })
        })
        const data = await ((await res).json())
        if (!data.success){
            throw new Error(`validating login failed : ${data.status_message}`);
        }
    }

    async function createSession(requestToken) {
        const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
        },
        body: JSON.stringify({ request_token: requestToken })
        }
    
        const res = await fetch(`${API_BASE_URL}${API_VERSION}${CREATE_SESSION_URL}`, options)
        const data = await ((await res).json())
        if (!data.success) {
        throw new Error('Creating session failed.')
        }
        sessionStorage.setItem('session_id', data.session_id)
    }

    async function getAccountData() {
        const sessionId = sessionStorage.getItem('session_id')
        if (!sessionId) {
        throw new Error('No session ID.')
        }
        const params = new URLSearchParams()
        params.append('session_id', sessionId)
        const url = `${API_BASE_URL}${API_VERSION}${ACCOUNT_URL}?${params}`
        const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
        }
        }
        const res = await fetch(url, options)
        const data = await ((await res).json())
        if (!data.id) {
        throw new Error('Gettinh user info failed.')
        }
        sessionStorage.setItem('user_id', data.id)
        return data
    }

    async function login(username, password) {
        const requestToken = await createRequestToken()
        await validateWithLogin(requestToken, username, password)
        await createSession(requestToken)
        userID.value =  await getAccountData()
    }

    app.provide('is_logged', userID.value != null)
    app.provide(LOGIN, login);
    app.provide(USER, userID)
}