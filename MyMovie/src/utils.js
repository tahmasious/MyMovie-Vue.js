import {API_READ_ACCESS_TOKEN} from './constants/api-constants'

export async function client(url, options){
    const newOptions = {
        method : 'GET',
        ...options,
        headers : {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`  
        }
    }
    const response = await fetch(url, newOptions);
    const data = await response.json();
    if(!response.ok){
        throw data;
    }
    return data;
}