import { NavLink } from 'react-router-dom';
import './NavLinkFilm.scss';

function NavLinkFilm({item}) {
    return <NavLink to={'/film/' + item.filmId} className = 'navLinkFilm'>
        <img src={item.posterUrlPreview} alt="" className='navLinkFilm__image' />
        <p className='navLinkFilm__name'>{item.nameRu}</p>
        <p className='navLinkFilm__year'>{item.year}</p>
    </NavLink>
}

export default NavLinkFilm;