
const GET_FILMS = 'GET_FILMS';
const GET_MORE_FILMS = 'GET_MORE_FILMS';
const GET_INFO_ABOUT_FILM = 'GET_INFO_ABOUT_FILM';

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
export const getFilms = (films) => {
    return {type: GET_FILMS, films}
};
export const getMoreFilms = (films) => {
    return {type: GET_MORE_FILMS, films}
}
export const getInfoAboutFilm = (filmId) => {
    return {type: GET_INFO_ABOUT_FILM, filmId}
}

export default mainReducer;