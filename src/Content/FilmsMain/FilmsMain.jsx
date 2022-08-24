
import { useState } from 'react';
import RangeComponent from '../../common/Range/Range';
import './FilmsMain.scss';
import { setRating, setYear } from '../../store/filmsMainReducer';
import { connect } from 'react-redux'
import Filters from './filters/Filters';
import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from './filters/filtersConst';
import Genres from './filters/Genres';

function FilmsMain({rating, setYear, setRating}) {
    return <div className="filmsMain">
        <div className="filmsMain__header">
            <h1 className="filmsMain__header__rubric">Все фильмы</h1>
            <p className="filmsMain__header__description">Подборка фильмов</p>
        </div>
        <div className="filmsMain__filter">
            <Filters name = 'Рейтинг' min = {RATING__MIN} max={RATING__MAX} setValues = {setRating}/>
            <Filters name = 'Год' min = {YEAR__MIN} max = {YEAR__MAX} setValues = {setYear}/>
            <Genres />
            <div className="filmsMain__filter__btns">
                <button onClick={() => console.log(rating)}>
                    Применить
                </button>
                <button>
                    Сброс
                </button>
            </div>
        </div>
        <div className="filmsMain__wrapper">

        </div>
    </div>
}
let mapStateToProps = (state) => {
    return {
        rating: state.filmsMain.rating,
    }
}
export default connect(mapStateToProps, {
    setRating,
    setYear
})(FilmsMain);