
import { Link } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
    return <div className='navigation'>
        <input type="checkbox" id='burger'/>
        <label htmlFor="burger" className='navigation__burger'></label>
        <nav className='navigation__wrapper'>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/movie'>Кино</Link></li>
                <li><Link to='/series'>Сериалы</Link></li>
                <li><Link to='/cartoons'>Мультфильмы</Link></li>
            </ul>
        </nav>
    </div>
}

export default Navigation;