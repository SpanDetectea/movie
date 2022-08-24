import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { moviesApi } from '../../../api/api';
import H1 from '../../../common/H1/H1';
import NavLinkFilm from '../../../common/NavLinks/NavLinkFilm/NavLinkFilm';
import { getSimilatFilms } from '../../../store/aboutFilmReducer'
import './SimilarFilm.scss';

function SimilarFilm({ getSimilatFilms, similars, similarsTotal }) {

    const { filmId } = useParams();

    const [startIndexFilm, setStartIndexFilm] = useState(0);

    useEffect(() => {
        moviesApi.getSimilarFilms(filmId).then(response => getSimilatFilms(response))
    }, [])

    const prevFilms = () => {
        setStartIndexFilm(startIndexFilm - 4)
    }
    const nextFilms = () => {
        setStartIndexFilm(startIndexFilm + 4)
    }
    return <div className="similarFilm">
        <H1 value = {` Похожие фильмы (${similarsTotal})`} />
        <div className="similarFilm__nav">
            <button onClick={prevFilms} disabled={startIndexFilm === 0} className="similarFilm__nav__style">{'<'}</button>
            <button onClick={nextFilms} className="similarFilm__nav__style" disabled={(startIndexFilm === similarsTotal - 3) || (startIndexFilm === similarsTotal - 2) || (startIndexFilm === similarsTotal - 1) || (startIndexFilm === similarsTotal - 4)}>{'>'}</button>
        </div>
        <div className="similarFilm__wrapper">
            <div className="similarFilm__wrapper__container">
                {similars.map((item, index) => {
                    if ((index < startIndexFilm + 4) && (index >= startIndexFilm))
                        return <div key={index}>
                            <NavLinkFilm item={item} />
                        </div>
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