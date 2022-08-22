const SET__RATING = 'SET__RATING';

let initialState = {
    rating: []
}

const filmsMainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET__RATING: {
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