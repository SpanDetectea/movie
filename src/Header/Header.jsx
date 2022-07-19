
import './Header.scss';
import Navigation from './Navigation/Navigation';

function Header() {
    return <div className='header'>
        <div className="header__name">
            {/* <div className='header__name__logo'>Кино</div> */}
            <Navigation />     
        </div>
        <div className="header__search">
            <input type="text" className='header__search__text' placeholder='Фильмы, сериалы, мультфильмы...'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/111px-Vector_search_icon.svg.png" alt="" className='header__search__lens'/>
        </div>
        <div className="header__signin">Войти</div>
    </div>
}

export default Header;