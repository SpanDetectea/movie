import './FilmsMain.scss';
import { setRating, setYear } from '../../../store/action';
import { setFilmsTC} from '../../../store/ThunkCreator';
import Filters from './filters/Filters';
import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from '../../../consts/filtersConst';
import H from '../../../common/H/H';
import ButtonFilm from '../../../common/Buttons/ButtonFilm/ButtonFilm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import BlockFilm from './BlockFilm/BlockFilm';
import Preloader from '../../../common/Preloader/Preloader'
import Pagination from './Pagination/Pagination';

function FilmsMain() {
    const rating = useSelector(state => state.filmsMain.rating);
    const year = useSelector(state => state.filmsMain.year);
    const films = useSelector(state => state.filmsMain.films);
    const preloader = useSelector(state => state.filmsMain.preloaderState)

    const dispatch = useDispatch();
    const [curPage, setCurPage] = useState(1);

    useEffect(() => {
        dispatch(setFilmsTC());
    }, [])
    useEffect(() => {
        dispatch(setFilmsTC(rating, year, curPage))
    }, [curPage])

    const getFilmWithFilters = () => dispatch(setFilmsTC(rating, year, curPage));
    const getFilmWithoutFilters = () => dispatch(setFilmsTC());

    return <div className="filmsMain">
        <div className="filmsMain__menu">
            <div className="filmsMain__menu__header">
                <H type={1} value={'Все фильмы'} />
                <p className="filmsMain__menu__header__description">Подборка фильмов</p>
            </div>
            <div className="filmsMain__menu__filter">
                <Filters name='Рейтинг' min={RATING__MIN} max={RATING__MAX} setValues={(e) => dispatch(setRating(e))} />
                <Filters name='Год' min={YEAR__MIN} max={YEAR__MAX} setValues={(e) => dispatch(setYear(e))} />
                <div className="filmsMain__menu__filter__btns">
                    <div onClick={getFilmWithFilters}>
                        <ButtonFilm value={'Применить'} width='90px' display='inline' />
                    </div>
                    <div onClick={getFilmWithoutFilters}>
                        <ButtonFilm value={'Сброс'} width='90px' display='inline' />
                    </div>
                </div>
            </div>
        </div>
        <div className="filmsMain__wrapper">
            <Preloader value={preloader} />
            {films.length > 0 && films.map(item => {
                return <div key={item.kinopoiskId}>
                    <BlockFilm film={item} />
                </div>
            })}
            <Pagination curPage={curPage} setCurPage = {setCurPage}/>
        </div>
    </div>
}

export default FilmsMain;