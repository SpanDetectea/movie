import { moviesApi } from "../api/api";
import { setFilms, togglePreloaderState } from "./action";

export const setFilmsTC = (rating, year, curPage = 1) => {
    return async (dispatch) => {
        dispatch(togglePreloaderState());
        let response = await moviesApi.getFilmsFilters(
            rating[0],
            rating[1],
            year[0],
            year[1],
            curPage
        )
        dispatch(setFilms(response));
        dispatch(togglePreloaderState());
    }
}