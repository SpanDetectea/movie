import './AboutFilmPage.scss';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { moviesApi } from '../../api/api';
import { getFilm } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Header/Header';
import AddInformation from './AddInformation/AddInformation';
import SimilarFilm from './SimilarFilm/SimilarFilm';
import Footer from '../../Footer/Footer';
import * as Scroll from 'react-scroll';
import ButtonBack from '../../common/Buttons/ButtonBack/ButtonBack';

function AboutFilm() {
    const { filmId } = useParams();

    const film = useSelector(state => state.aboutFilm.film);
    const dispatch = useDispatch();

    let scroll = Scroll.animateScroll;

    useEffect(() => {
        moviesApi.getMovieInfo(filmId).then(response => dispatch(getFilm(response)));
        scrollToTop();
    }, [filmId])

    function scrollToTop () {
        scroll.scrollToTop();
    }
    return <>
        <Header />
        <div className="aboutFilm">
            <ButtonBack />
            {film.length > 0 && film.map((item) => {
                return (<React.Fragment key={item.kinopoiskId}>
                    <img src={item.posterUrlPreview} className='aboutFilm__image' alt=''/>
                    <div className="aboutFilm__wrapper">
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
export default AboutFilm;