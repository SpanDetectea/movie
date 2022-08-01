import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { moviesApi } from '../../api/api';
import { getSimilatFilms } from '../../store/aboutFilmReducer'
import './SimilarFilm.scss';

function SimilarFilm({ getSimilatFilms, similars, similarsTotal }) {

    const { filmId } = useParams();

    const [startIndexFilm, setStartIndexFilm] = useState(0);

    useEffect(() => {
        moviesApi.getSimilarFilms(filmId).then(response => getSimilatFilms(response))
    }, [])

    const prevFilms = () => {
        // if (startIndexFilm - 4 >= 0) {
        setStartIndexFilm(startIndexFilm - 4)
        // } else {
        // setStartIndexFilm(0)
        // }
    }
    const nextFilms = () => {
        // if (startIndexFilm + 4 < similarsTotal) {
        setStartIndexFilm(startIndexFilm + 4)
        // } else {
        // setStartIndexFilm(similarsTotal-4)
        // }
    }
    return <div className="similarFilm">
        <h2 className="similarFilm__title">
            Похожие фильмы ({similarsTotal})
        </h2>
        <div className="similarFilm__nav">
            <button onClick={prevFilms} disabled={startIndexFilm === 0} className="similarFilm__nav__style">{'<'}</button>
            <button onClick={nextFilms} className="similarFilm__nav__style" disabled={(startIndexFilm === similarsTotal - 3) || (startIndexFilm === similarsTotal - 2) || (startIndexFilm === similarsTotal - 1) || (startIndexFilm === similarsTotal - 4)}>{'>'}</button>
        </div>
        <div className="similarFilm__wrapper">
            <div className="similarFilm__wrapper__container">
                {similars.map((item, index) => {
                    if ((index < startIndexFilm + 4) && (index >= startIndexFilm))
                        return <NavLink to={'/film/' + item.filmId} key={item.filmId}>
                            <div className='similarFilm__wrapper__container__filmInfo'>
                                <img src={item.posterUrlPreview} />
                            </div>
                        </NavLink>
                })}
            </div>
        </div>
    </div>
}


const mapStateToProps = (state) => {
    return {
        similars: state.aboutFilm.similars,
        similarsTotal: state.aboutFilm.similarsTotal
    }
}

export default connect(mapStateToProps, {
    getSimilatFilms
})(SimilarFilm);