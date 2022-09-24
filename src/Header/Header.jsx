
import { useState } from 'react';
import { moviesApi } from '../api/api';
import './Header.scss';
import Navigation from './Navigation/Navigation';
import { setFilms, togglePreloaderTC } from '../store/headerReducer';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

function Header() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const films = useSelector(state => state.header.films)
    const preloader = useSelector(state => state.header.preloader)

    const getFilms = (word) => {
        moviesApi.getFilmsSearch(word, 1).then(response => dispatch(setFilms(response.films)))
        setSearch(word);
    }
    const clearInput = (e) => {
        setTimeout(() => {
            setSearch('');
            dispatch(setFilms([]));
        }, 500);
    }

    return <div className='header'>
        <div className="header__name">
            <Navigation />
        </div>
        <div className="header__search" onBlur={clearInput} tabIndex={1} autoFocus>
            <div className='header__search__input'>
                <input type="text" className='header__search__input__text' placeholder='Фильмы, сериалы, мультфильмы...' value={search} onInput={(e) => getFilms(e.target.value)} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/111px-Vector_search_icon.svg.png" alt="" className='header__search__input__lens' />
            </div>
            <div className='header__search__wrapper' >
                {films && films.map(item => {
                    return <NavLink to={`/film/${item.filmId}`} key={item.filmId}>
                        <div className="header__search__wrapper__film">
                            <img className="header__search__wrapper__film__img" src={item.posterUrl} alt="" />
                            <span className="header__search__wrapper__film__name">{item.nameRu}</span>
                        </div>
                    </NavLink>
                })}
            </div>
        </div>
        <div className="header__signin">
            <NavLink to={'/profile'}> Войти</NavLink>
        </div>
    </div>
}

export default Header;