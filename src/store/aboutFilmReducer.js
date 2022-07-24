
const GET_FILM = 'GET_FILM';

let initialState = {
    film: []
}

const aboutFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILM:
            console.log(action.data);
            return {
                ...state,
                film: action.data.films
            };
        default: return state;
    }
}
export const getFilm = (data) => {
    return {type: GET_FILM, data}
};

export default aboutFilmReducer;