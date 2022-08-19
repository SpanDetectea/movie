
import { useState } from 'react';
import RangeComponent from '../../common/Range/Range';
import './FilmsMain.scss';

function FilmsMain() {

    const [ratingValues, setRatingValues] = useState([1, 10])

    const ratingFrom = (e) => {
        let prop = +e.target.value;
        console.log(Number.isNaN(prop));
        if ((prop > 10) || (prop <0) || (Number.isNaN(prop))) {
            return setRatingValues([1, ratingValues[1]])    
        }
        setRatingValues([prop, ratingValues[1]])
    }
    const validateRating1 = (e) => {
        let prop = +e.target.value;
        if ((prop === '') || (prop > ratingValues[1])) {
            setRatingValues([1,ratingValues[1]])
        }
    }
    const validateRating2 = (e) => {
        let prop = +e.target.value;
        if ((prop === '') || (prop < ratingValues[0])) {
            setRatingValues([ratingValues[0], 10])
        }
    }
    const ratingUpTo = (e) => {
        let prop = +e.target.value;
        if ((prop > 10) || (prop <0) || (Number.isNaN(prop))) {
            return setRatingValues([ratingValues[0], 10])    
        }
        setRatingValues([ratingValues[0], prop])
    }
    return <div className="filmsMain">
        <div className="filmsMain__header">
            <h1 className="filmsMain__header__rubric">Все фильмы</h1>
            <p className="filmsMain__header__description">Подборка фильмов</p>
        </div>
        <div className="filmsMain__filter">
            <div className="filmsMain__filter__count">
                <h2 className="filmsMain__filter__count__name">
                    Рейтинг
                </h2>
                <button className="filmsMain__filter__count__hide">
                    <span>></span>
                </button>
                <div className="filmsMain__filter__count__values">
                    <label htmlFor="" className="filmsMain__filter__count__values__from">
                        <span className="filmsMain__filter__count__values__from__header">
                            От
                        </span>
                        <input type="text" className="filmsMain__filter__count__values__from__input" onBlur = {(e) => validateRating1(e)} value={ratingValues[0]} onInput={(e) => ratingFrom(e)}/>
                    </label>
                    <label htmlFor="" className="filmsMain__filter__count__values__upTo">
                        <span className="filmsMain__filter__count__values__upTo__header">
                            До
                        </span>
                        <input type="text" className="filmsMain__filter__count__values__upTo__input" onBlur = {(e) => validateRating2(e)} value={ratingValues[1]} onInput={(e) => ratingUpTo(e)}/>
                    </label>
                    {/* <input type="range" min={0} max={100} step={1} className="filmsMain__filter__count__values__range"/> */}
                    <RangeComponent ratingValues={ratingValues} setRatingValues={setRatingValues} />
                </div>

            </div>

        </div>
        <div className="filmsMain__wrapper"></div>
    </div>
}

export default FilmsMain;