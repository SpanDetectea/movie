import './AboutFilm.scss';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { moviesApi } from '../api/api';
import { getFilm } from '../store/aboutFilmReducer';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import AddInformation from './AddInformation/AddInformation';
import SimilarFilm from './SimilarFilm/SimilarFilm';
import Footer from '../Footer/Footer';
import * as Scroll from 'react-scroll';
import {setFilms} from "../store/headerReducer";

function AboutFilm({ getFilm, film, setFilms }) {
    const { filmId } = useParams();

    let scroll = Scroll.animateScroll;
    let navigate = useNavigate();

    useEffect(() => {
        // setFilms([]);
        moviesApi.getMovieInfo(filmId).then(response => getFilm(response));
        scrollToTop();
    }, [filmId])

    function scrollToTop () {
        scroll.scrollToTop();
    }
    return <>
        <Header />
        <div className="aboutFilm">
            <button onClick={() => navigate('/')} className='aboutFilm__btnBack'>{'<'} Назад</button>
            {film.length > 0 && film.map((item) => {
                return (<React.Fragment key={item.kinopoiskId}>
                    <img src={item.posterUrlPreview} className='aboutFilm__image' />
                    <div className="aboutFilm__wrapper">
                        {/* <img src={item.posterUrlPreview} className='aboutFilm__wrapper__image' /> */}
                        <h1 className='aboutFilm__wrapper__name'>{item.nameRu}</h1>
                        <p className='aboutFilm__wrapper__nameOriginal'>{item.nameOriginal}<span className='aboutFilm__wrapper__nameOriginal__ageLimits'> {item.ratingAgeLimits.slice(3) + '+'}</span></p>
                        <a href={`https://gg.xooxo.cc/film/${item.kinopoiskId}`}><button className='aboutFilm__wrapper__viewing btn-description'>Смотреть</button></a>
                        <button className='aboutFilm__wrapper__favorites btn-description'>Буду смотреть</button>
                        <h2 className='aboutFilm__wrapper__description'>О фильме</h2>
                        <ul className='aboutFilm__wrapper__list'>
                            <li className='aboutFilm__wrapper__list__par'><span>Год производства</span><span>{item.year}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Страна</span><span>{item.countries.map((i, index) => {
                                return index === item.countries.length - 1 ? `${i.country}` : `${i.country}, `;
                            })}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Жанр</span><span>{item.genres.map((i, index) => {
                                return index === item.genres.length - 1 ? `${i.genre}` : `${i.genre}, `;
                            })}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Слоган</span><span>{item.slogan}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Возраст</span><span>{item.ratingAgeLimits.slice(3) + '+'}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Время</span><span>{item.filmLength}</span></li>
                            <li className='aboutFilm__wrapper__list__par'><span>Рейтинг</span><span>{item.ratingKinopoisk}</span></li>
                        </ul>
                    </div>
                </React.Fragment>)
            })}
        </div>
        <AddInformation />
        <SimilarFilm />
        <Footer />
    </>
}
const mapStateToProps = (state) => {
    return {
        film: state.aboutFilm.film
    }
}
export default connect(mapStateToProps, {
    getFilm,
    setFilms
})(AboutFilm);