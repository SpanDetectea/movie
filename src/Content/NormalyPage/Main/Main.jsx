import './Main.scss';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getMoreFilms } from '../../../store/action';
import { NavLink } from 'react-router-dom'
import Rating from '../../../common/Rating/Rating';
import NavLinkFilm from '../../../common/NavLinks/NavLinkFilm/NavLinkFilm';
import H from '../../../common/H/H';
import ButtonFilm from '../../../common/Buttons/ButtonFilm/ButtonFilm';


function Main() {

    const films = useSelector(state => state.main.films)
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    useEffect(() => {
        moviesApi.getMovies(page).then(response => dispatch(getFilms(response)));
    }, [])

    const getMore = (e) => {
        if (e.target.tagName === 'BUTTON') {
            moviesApi.getMovies(page + 1).then(response => dispatch(getMoreFilms(response)));
            setPage(page + 1);
        }
    }

    return <div className="main">
        <div className="main__header">
            <H type = {1} value={'Новые фильмы'} />
            <NavLink to='/movie'>
                <ButtonFilm value={'Смотреть все'} />
            </NavLink>
        </div>
        <div className='main__movies'>
            {films !== null && films.map(item => {
                return (
                    <div className='main__movies__movie' key={item.filmId}>
                        <NavLinkFilm item={item} />
                        <Rating rating={item.rating} />
                    </div>
                );
            })}
        </div>
        <div onClick={(e) => getMore(e)}>
            <ButtonFilm color='lightcoral' value={'Показать еще'} />
        </div>
    </div>
}

export default Main;