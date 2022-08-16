import { combineReducers, createStore } from "redux";
import aboutFilmReducer from "./aboutFilmReducer";
import headerReducer from "./headerReducer";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    main: mainReducer,
    aboutFilm: aboutFilmReducer,
    header: headerReducer
});


let store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;