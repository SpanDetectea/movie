
import { useState } from 'react';
import { moviesApi } from '../api/api';
import './Header.scss';
import Navigation from './Navigation/Navigation';
import { setFilms } from '../store/headerReducer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Header({ films, setFilms }) {
    const [search, setSearch] = useState('');
    // const [films, setFilms] = useState(undefined);

    const getFilms = (word) => {
        console.log(word);
        moviesApi.getFilmsSearch(word, 1).then(response => setFilms(response.films))
        setSearch(word);
    }
    const clearInput = () => {
        setSearch('');
        setFilms('');
    }
    const clearWrapper = () => setFilms('');
    return <div className='header'>
        <div className="header__name">
            {/* <div className='header__name__logo'>Кино</div> */}
            <Navigation />
        </div>
        <div className="header__search" onBlur={clearInput}>
            <input type="text" className='header__search__text' placeholder='Фильмы, сериалы, мультфильмы...' value={search}  onInput={(e) => getFilms(e.target.value)} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/111px-Vector_search_icon.svg.png" alt="" className='header__search__lens' />
            <div className="header__search__wrapper">
                {films && films.map(item => {
                    return <NavLink to = {`/film/${item.filmId}`}>
                        <div className="header__search__wrapper__film">
                            <img className="header__search__wrapper__film__img" src={item.posterUrl} alt="" />
                            <span className="header__search__wrapper__film__name">{item.nameRu}</span>
                        </div>
                    </NavLink>
                })}
            </div>
        </div>
        <div className="header__signin">Войти</div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        films: state.header.films
    }
}

export default connect(mapStateToProps, { setFilms })(Header);