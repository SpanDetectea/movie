import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from "../consts/filtersConst";

const SET__RATING = 'SET__RATING';
const SET__YEAR = 'SET__YEAR';
const SET__FILMS = 'SET__FILMS';

let initialState = {
    rating: [RATING__MIN, RATING__MAX],
    year: [YEAR__MIN, YEAR__MAX],
    films: [],
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
        case SET__YEAR: {
            return { ...state,
                year: [...action.year]
            }
        }
        case SET__FILMS: {
            return {
                ...state,
                films: [...action.films.items],
                total: action.films.total,
                totalPages: action.films.totalPages
            }
        }
        default: return state;
    }
}

export const setRating = (rating) => {
    console.log('tyt')
    return {type: SET__RATING, rating}
}
export const setYear = (year) => {
    console.log('tyt2')
    return {type: SET__YEAR, year}
}
export const setFilms = (films) => {
    return {type: SET__FILMS, films}
}

export default filmsMainReducer;