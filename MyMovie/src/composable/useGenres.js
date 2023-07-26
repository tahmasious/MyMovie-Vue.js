import { client } from '@/utils.js'
import { GENRES } from '@/keys';
import {API_BASE_URL} from '@/constants/api-constants'

export async function useGenres(app){
    const res = await client(`${API_BASE_URL}3/genre/movie/list`);
    app.provide(GENRES, res.genres)
}