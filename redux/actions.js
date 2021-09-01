import axios from 'axios';

import { BASE_URL } from '../config'

export const GET_FAVOURITES = 'GET_FAVOURITES'
export const ADD_TO_FAVOURITES_LIST = 'ADD_TO_FAVOURITES_LIST'
export const REMOVE_FROM_FAVOURITES_LIST = 'REMOVE_FROM_FAVOURITES_LIST'

export const getFavourites = () => {
    try {
        return async dispatch => {
            const response = await axios.get(`${BASE_URL}`);
            if (response.data) {
                dispatch({
                    type: GET_FAVOURITES,
                    payload: response.data
                })
            } else {
                console.log('Unable to fetch data from the API BASE URL!')
            }
        };
    } catch (error) {
        
        console.log(error)
    }
};