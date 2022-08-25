import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from "../Content/MoviePage/FilmsMain/filters/filtersConst";

const SET__RATING = 'SET__RATING';
const SET__YEAR = 'SET__YEAR';

let initialState = {
    rating: [RATING__MIN, RATING__MAX],
    year: [YEAR__MIN, YEAR__MAX],
    genres: [
        'Все жанры',
        'Семейные',
        'Биографии',
        'Боевики',
        'Вестерны',
        'Военные',
        'Детективы',
        'Детские',
        'Документальные',
        'Драмы',
        'Исторические',
        'Комедии',
        'Короткометражки',
        'Криминал',
        'Мелодрамы',
        'Музыкальные',
        'Мюзиклы',
        'Новости',
        'Приключения',
        'Спортивные',
        'Триллеры',
        'Ужасы',
        'Фантастика',
        'Фильмы-нуар',
        'Фэнтези',
    ]
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
export const setYear = (year) => {
    return {type: SET__YEAR, year}
}

export default filmsMainReducer;