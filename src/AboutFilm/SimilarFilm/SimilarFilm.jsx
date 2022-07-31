import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { moviesApi } from '../../api/api';
import { getSimilatFilms } from '../../store/aboutFilmReducer'
import './SimilarFilm.scss';

function SimilarFilm({getSimilatFilms, similars, similarsTotal}) {

    const { filmId } = useParams();

    useEffect(() => {
        moviesApi.getSimilarFilms(filmId).then(response => getSimilatFilms(response))
    }, [])


    return <div className="similarFilm">
        <h2 className="similarFilm__title">
            Похожие фильмы ({similarsTotal})
        </h2>
        <div className="similarFilm__wrapper">
            
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