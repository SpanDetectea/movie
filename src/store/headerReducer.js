const GET__FILMS = 'GET__FILMS';

let initialState = {
    films: []
}
const headerReducer = (state = initialState, action) => {
switch (action.type) {
    case GET__FILMS:
        return {...state, films: [...action.films]}
    default: return state;
}

}
export const setFilms = (films) => {
    return {type: GET__FILMS, films}
}

export default headerReducer;