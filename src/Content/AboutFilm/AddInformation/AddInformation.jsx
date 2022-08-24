import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { moviesApi } from '../../../api/api';
import './AddInformation.scss';
import {getFacts} from '../../../store/aboutFilmReducer';

function AddInformation({ film, getFacts, facts }) {
    const [choice, setChoice] = useState(2);

    useEffect(() => {
        if (film.length > 0) {
            moviesApi.getFacts(film[0].kinopoiskId).then(response => getFacts(response));
        }
    }, [film])

    function createMarkup(text) {
        return {__html: `${text}`};
      }
      function styleHeaderName (numHeader) {
        return numHeader === choice ? 'addInformation__wrapper__header__name red': 'addInformation__wrapper__header__name';
      }
    return <div className='addInformation'>
        <div className='addInformation__wrapper'>
            <div className='addInformation__wrapper__header'>
                <div className={styleHeaderName(1)} onClick={() => setChoice(1)}>Описание</div>
                <div className={styleHeaderName(2)} onClick={() => setChoice(2)}>Факты</div>
                <div className={styleHeaderName(3)} onClick={() => setChoice(3)}>Ошибки</div>
            </div>
            <div className='addInformation__wrapper__content'>
                {film.length > 0 && choice == 1 && film[0].description}
                {facts.length > 0 && choice == 2 && facts.map((item, index) => {
                    if (item.type === 'FACT') {
                        return <div key = {index} dangerouslySetInnerHTML={createMarkup(item.text)} className = 'addInformation__wrapper__content__item' />;
                    }
                })}
                {facts.length > 0 && choice == 3 && facts.map((item, index) => {
                    if (item.type === 'BLOOPER') {
                        return <div key = {index} dangerouslySetInnerHTML={createMarkup(item.text)} className = 'addInformation__wrapper__content__item' />;
                    }
                })}
            </div>
        </div>
    </div>
}
let mapStateToProps = (state) => {
    return {
        film: state.aboutFilm.film,
        facts: state.aboutFilm.facts
    }
}
export default connect(mapStateToProps, {
    getFacts
})(AddInformation);