
import './FilmsMain.scss';

function FilmsMain() {
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
                <button>
                    >
                </button>
                <div className="filmsMain__filter__count__values">
                    <label htmlFor="" className="filmsMain__filter__count__values__from">
                        <span className="filmsMain__filter__count__values__from__header">
                            От
                        </span>
                        <input type="text" className="filmsMain__filter__count__values__from__input" value={1} />
                    </label>
                    <label htmlFor="" className="filmsMain__filter__count__values__upTo">
                        <span className="filmsMain__filter__count__values__from__header">
                            До
                        </span>
                        <input type="text" className="filmsMain__filter__count__values__from__input" value={10} />
                    </label>
                    <input type="range" min={0} max = {100} step = {1} />
                </div>
            </div>

        </div>
        <div className="filmsMain__wrapper"></div>
    </div>
}

export default FilmsMain;