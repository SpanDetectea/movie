
const GET_FILM = 'GET_FILM';
const GET_FACTS = 'GET_FACTS';
const GET_SIMILAR_FILM = 'GET_SIMILAR_FILM';

let initialState = {
    film: [],
    facts: [],
    similars: [],
    similarsTotal: null
}

const aboutFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILM:
            let newFilm = [];
            newFilm.push(action.data)
            return {
                ...state,
                film: newFilm
            };
        case GET_FACTS:
            return {
                ...state,
                facts: [...action.data.items]
            };
        case GET_SIMILAR_FILM:
            return {
                ...state,
                similars: [...action.data.items],
                similarsTotal:  action.data.total
            };
        default: return state;
    }
}
export const getFilm = (data) => {
    return {type: GET_FILM, data}
};
export const getFacts = (data) => {
    return {type: GET_FACTS, data}
};
export const getSimilatFilms = (data) => {
    return {type: GET_SIMILAR_FILM, data}
};

export default aboutFilmReducer;