import { RATING__MAX, RATING__MIN } from "../Container/FilmsMain/filters/filtersConst";

const SET__RATING = 'SET__RATING';

let initialState = {
    rating: [RATING__MIN, RATING__MAX]
}

const filmsMainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET__RATING: {
            console.log('dsadsad');
            return { ...state,
                rating: [...action.rating]
            }
        }
        default: return state;
    }
}

export const setRating = (rating) => {
    return {type: SET__RATING, rating}
}

export default filmsMainReducer;