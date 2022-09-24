import { combineReducers, createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import aboutFilmReducer from "./aboutFilmReducer";
import filmsMainReducer from "./filmsMainReducer";
import headerReducer from "./headerReducer";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    main: mainReducer,
    aboutFilm: aboutFilmReducer,
    header: headerReducer,
    filmsMain: filmsMainReducer
});


let store = createStore(reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);

window.store = store;

export default store;