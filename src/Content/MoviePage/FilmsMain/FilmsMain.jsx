import './FilmsMain.scss';
import { setFilms, setRating, setYear } from '../../../store/filmsMainReducer';
import Filters from './filters/Filters';
import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from '../../../consts/filtersConst';
// import Genres from './filters/Genres';
import H from '../../../common/H/H';
import ButtonFilm from '../../../common/Buttons/ButtonFilm/ButtonFilm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { moviesApi } from '../../../api/api';
import { useState } from 'react';
import BlockFilm from './BlockFilm/BlockFilm';

function FilmsMain() {
    const rating = useSelector(state => state.filmsMain.rating);
    const year = useSelector(state => state.filmsMain.year);
    const films = useSelector(state => state.filmsMain.films);

    const dispatch = useDispatch();
    const [curPage, setCurPage] = useState(1);

    useEffect(() => {
        moviesApi.getFilmsFilters().then(response => dispatch(setFilms(response)))
    }, [])

    const getFilmWithFilters = () => {
        moviesApi.getFilmsFilters(
            rating[0],
            rating[1],
            year[0],
            year[1],
            curPage
        ).then(response => dispatch(setFilms(response)))
    }

    return <div className="filmsMain">
        <div className="filmsMain__menu">
            <div className="filmsMain__menu__header">
                <H type={1} value={'Все фильмы'} />
                <p className="filmsMain__menu__header__description">Подборка фильмов</p>
            </div>
            <div className="filmsMain__menu__filter">
                <Filters name='Рейтинг' min={RATING__MIN} max={RATING__MAX} setValues={(e) => dispatch(setRating(e))} />
                <Filters name='Год' min={YEAR__MIN} max={YEAR__MAX} setValues={(e) => dispatch(setYear(e))} />
                {/* <Genres /> */}
                <div className="filmsMain__menu__filter__btns">
                    <div onClick={getFilmWithFilters}>
                        <ButtonFilm value={'Применить'} width='90px' display='inline' />
                    </div>
                    <div><ButtonFilm value={'Сброс'} width='90px' display='inline' />
                    </div>
                </div>
            </div>
        </div>
        <div className="filmsMain__wrapper">
            {films.length > 0 && films.map(item => {
                return <div key={item.kinopoiskId}>
                    {/* {item.nameRu ?? item.nameOriginal} */}
                    <BlockFilm film={item} />
                </div>
            })}
        </div>
    </div>
}

export default FilmsMain;