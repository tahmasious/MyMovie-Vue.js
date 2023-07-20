import {API_READ_ACCESS_TOKEN} from './constants/api-constants'
import {API_BASE_URL} from './constants/api-constants'

export async function client(url, options, method = 'GET'){
    const newOptions = {
        method : method,
        body : JSON.stringify(options),
        headers : {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`  
        }
    }
    console.log(newOptions);
    const response = await fetch(url, newOptions);
    const data = await response.json();
    if(!response.ok){
        throw data;
    }
    return data;
}


export async function getGenreNamesByIDs(ids) {
    let genreNames = []
    const res = await client(`${API_BASE_URL}3/genre/movie/list`);
    for (let genre of res.genres) {
        if (ids.includes(genre.id)){
            genreNames.push(genre.name) ;
        }
    }
    return genreNames;
}