import { useState } from 'react';
import RangeComponent from '../../../common/Range/Range';
import '../FilmsMain.scss';
import { setRating } from '../../../store/filmsMainReducer';
import { connect } from 'react-redux'

const Filters = ({setRating, name, min, max, minmax }) => {
    console.log(min, max, minmax);
    const [ratingValues, setRatingValues] = useState([1, 10])
    const [isViewRating, setIsViewRating] = useState(true);

    const ratingFrom = (e) => {
        let prop = +e.target.value;
        if ((prop > 10) || (prop < 0) || (Number.isNaN(prop))) {
            return setRatingValues([1, ratingValues[1]])
        }
        setRatingValues([prop, ratingValues[1]])
        setRating(ratingValues)
    }
    const validateRating1 = (e) => {
        let prop = +e.target.value;
        if ((prop === '') || (prop > ratingValues[1])) {
            setRatingValues([1, ratingValues[1]])
        }
        setRating(ratingValues)
    }
    const validateRating2 = (e) => {
        let prop = +e.target.value;
        if ((prop === '') || (prop < ratingValues[0])) {
            setRatingValues([ratingValues[0], 10])
        }
        setRating(ratingValues)
    }
    const ratingUpTo = (e) => {
        let prop = +e.target.value;
        if ((prop > 10) || (prop < 0) || (Number.isNaN(prop))) {
            return setRatingValues([ratingValues[0], 10])
        }
        setRatingValues([ratingValues[0], prop])
        setRating(ratingValues)
    }
    const toggleRating = () => {
        setIsViewRating(!isViewRating)
    }
    return (
        <div className="filmsMain__filter__count">
            <h2 className="filmsMain__filter__count__name">
                {name}
            </h2>
            <button className={isViewRating ? 'filmsMain__filter__count__hide' : 'filmsMain__filter__count__hide reverseHide'}>
                <span onClick={toggleRating}>></span>
            </button>
            {isViewRating && <div className="filmsMain__filter__count__values">
                <label htmlFor="" className="filmsMain__filter__count__values__from">
                    <span className="filmsMain__filter__count__values__from__header">
                        От
                    </span>
                    <input type="text" className="filmsMain__filter__count__values__from__input" onBlur={(e) => validateRating1(e)} value={ratingValues[0]} onInput={(e) => ratingFrom(e)} />
                </label>
                <label htmlFor="" className="filmsMain__filter__count__values__upTo">
                    <span className="filmsMain__filter__count__values__upTo__header">
                        До
                    </span>
                    <input type="text" className="filmsMain__filter__count__values__upTo__input" onBlur={(e) => validateRating2(e)} value={ratingValues[1]} onInput={(e) => ratingUpTo(e)} />
                </label>
                <RangeComponent ratingValues={ratingValues} setRatingValues={setRatingValues} setRating={setRating} />
            </div>}


        </div>
    )
}


export default connect(null, {
    setRating
})(Filters);