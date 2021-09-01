import { GET_FAVOURITES } from './actions';

const initialState = {
    favourites: []
};

function favouritesReducer (state = initialState, action) {
    switch (action.type) {
        case GET_FAVOURITES:
            return { ...state, favourites: action.payload }
        default:
            return state
    }
}

export default favouritesReducer