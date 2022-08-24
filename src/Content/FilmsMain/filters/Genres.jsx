import { useState } from "react";
import { connect } from "react-redux";
import './Genres.scss';
// import '../FilmsMain.scss'

function Genres({ genres }) {
    const [isViewRating, setIsViewRating] = useState(true);

    const toggleRating = () => {
        setIsViewRating(!isViewRating)
    }

    return <div className="genres">
        <h2 className="genres__name">
            Жанры
        </h2>
        <button className={isViewRating ? 'genres__hide' : 'genres__hide reverseHide'}>
            <span onClick={toggleRating}>></span>
        </button>

        {isViewRating && <div className="genres__values">
            <div>
                <select className="genres__values__list">
                    {genres.map((item, index) => {
                        return <option className="genres__values__list__item" key = {index}>
                            {item}
                        </option>
                    })}
                </select>
            </div>
            {/* <label htmlFor="" className="filmsMain__filter__count__values__from">
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
                    <RangeComponent ratingValues={ratingValues} setRatingValues={setRatingValues} setRating={setRating} /> */}
        </div>}


    </div>
}

let mapStateToProps = (state) => {
    return {
        genres: state.filmsMain.genres
    }
}

export default connect(mapStateToProps)(Genres);