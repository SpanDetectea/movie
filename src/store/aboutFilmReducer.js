
const GET_FILM = 'GET_FILM';
const GET_FACTS = 'GET_FACTS';

let initialState = {
    film: [],
    facts: []
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
            // console.log(action.data.items);
            return {
                ...state,
                facts: [...action.data.items]
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

export default aboutFilmReducer;