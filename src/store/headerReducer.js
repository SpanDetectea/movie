import {GET__SEARCH__FILMS} from './actionConst'

let initialState = {
    films: [],
    isAuth: false
}
const headerReducer = (state = initialState, action) => {
switch (action.type) {
    case GET__SEARCH__FILMS:
        return {...state, films: [...action.films]}
    default: return state;
}

}

export default headerReducer;