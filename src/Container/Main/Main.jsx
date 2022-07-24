import './Main.scss';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../api/api';
import { connect } from 'react-redux';
import { getFilms, getMoreFilms, getInfoAboutFilm } from '../../store/mainReducer';
import { getFilm } from '../../store/aboutFilmReducer';
import { NavLink } from 'react-router-dom'

function Main({ films, getFilms, getMoreFilms, getInfoAboutFilm, getFilm }) {

    const [page, setPage] = useState(1);

    useEffect(() => {
        moviesApi.getMovies(page).then(response => getFilms(response));
    }, [])

    const getMore = () => {
        moviesApi.getMovies(page + 1).then(response => getMoreFilms(response));
        setPage(page + 1);
    }
    const getInfoAF = (filmId) => {
        moviesApi.getMovieInfo(filmId).then(response => getFilm(response));
    }
    return <div className="main">
        <div className="main__header">
            <h1 className='main__header__new-movies'>Новые фильмы</h1>
            <button className='main__header__all-movies'>Смотреть все</button>
        </div>
        <div className='main__movies'>
            {films !== null && films.map(item => {
                return (
                    <div className='main__movies__movie' key={item.filmId} onClick={() => getInfoAF(item.filmId)}>
                        <NavLink to={'/film/' + item.filmId}>
                            <img src={item.posterUrlPreview} alt="" className='main__movies__movie__image' />
                            <p className='main__movies__movie__name'>{item.nameRu}</p>
                            <p className='main__movies__movie__year'>{item.year}</p>
                        </NavLink>
                    </div>
                );
            })}
        </div>
        <button className='main__more' onClick={getMore}>Показать еще</button>
    </div>
}

let mapStateToProps = (state) => ({
    films: state.main.films
})

const MainContainer = connect(mapStateToProps, {
    getFilms,
    getMoreFilms,
    getInfoAboutFilm,
    getFilm
})(Main);


export default MainContainer;