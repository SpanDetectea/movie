import { moviesApi } from "../api/api";
import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from "../consts/filtersConst";

const SET__RATING = 'SET__RATING';
const SET__YEAR = 'SET__YEAR';
const SET__FILMS = 'SET__FILMS';
const TOGGLE__PRELOADER = 'TOGGLE__PRELOADER';

let initialState = {
    rating: [RATING__MIN, RATING__MAX],
    year: [YEAR__MIN, YEAR__MAX],
    films: [],
    preloaderState: false,
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
    ],
}

const filmsMainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET__RATING: {
            return {
                ...state,
                rating: [...action.rating]
            }
        }
        case SET__YEAR: {
            return {
                ...state,
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
        case TOGGLE__PRELOADER: {
            return {
                ...state,
                preloaderState: !state.preloaderState
            }
        }
        default: return state;
    }
}

export const setRating = (rating) => {
    return { type: SET__RATING, rating }
}
export const setYear = (year) => {
    return { type: SET__YEAR, year }
}
export const setFilms = (films) => {
    return { type: SET__FILMS, films }
}
export const togglePreloaderState = () => {
    return { type: TOGGLE__PRELOADER }
}
export const setFilmsTC = (rating, year, curPage) => {
    // console.log('tyt')
    return (dispatch) => {
        // console.log('dsadsadsa')
        // dispatch(setFilms([3,5]))
        dispatch(togglePreloaderState());
        moviesApi.getFilmsFilters(
            rating[0],
            rating[1],
            year[0],
            year[1],
            curPage
        ).then(data => {
            console.log('dsadsadsa')
            dispatch(setFilms(data));
            dispatch(togglePreloaderState());
        });
    }
}

export default filmsMainReducer;
