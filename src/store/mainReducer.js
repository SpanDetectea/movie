import {GET_FILMS, GET_MORE_FILMS, GET_INFO_ABOUT_FILM} from './actionConst'

let initialState = {
    films: [],
    infoAboutFilm: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS:
            return {
                ...state,
                films: action.films.films
            };
        case GET_MORE_FILMS:
            return {
                ...state,
                films: [...state.films, ...action.films.films]
            };
        case GET_INFO_ABOUT_FILM:
            return {
                ...state,
                infoAboutFilm: action.filmId
            };
        default: return state;
    }
}

export default mainReducer;