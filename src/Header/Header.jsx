
import { useState } from 'react';
import { moviesApi } from '../api/api';
import './Header.scss';
import Navigation from './Navigation/Navigation';

function Header() {
    const [search, setSearch] = useState('')

    const getFilms = (word) => {
        console.log(word);
        moviesApi.getFilmsSearch(word,1).then(response => console.log(response))
        setSearch(word);
    }
    return <div className='header'>
        <div className="header__name">
            {/* <div className='header__name__logo'>Кино</div> */}
            <Navigation />     
        </div>
        <div className="header__search">
            <input type="text" className='header__search__text' placeholder='Фильмы, сериалы, мультфильмы...' value={search} onInput = {(e) => getFilms(e.target.value)}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/111px-Vector_search_icon.svg.png" alt="" className='header__search__lens'/>
        </div>
        <div className="header__signin">Войти</div>
    </div>
}

export default Header;