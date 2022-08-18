import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech',
    headers: {
         'X-API-KEY': '2db36e01-65c5-4c85-bcc8-42996fbff616', //gmail
        //'X-API-KEY': '0eef1eeb-c3c0-4165-ae66-e2a7074cd6a3', //yandex
    }
});

export const moviesApi = {
    getMovies(page) {
        return instance.get(`/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`).then(response => response.data);
    },
    getPromoMovie(movie = 666) {
        return instance.get(`/api/v2.2/films/${movie}/videos`).then(response => response.data);
    },
    getMovieInfo(movieId) {
        return instance.get(`/api/v2.2/films/${movieId}`).then(response => response.data);
    },
    getFacts(movieId) {
        return instance.get(`/api/v2.2/films/${movieId}/facts`).then(response => response.data);
    },
    getSimilarFilms(movieId) {
        return instance.get(`/api/v2.2/films/${movieId}/similars`).then(response => response.data);
    },
    getFilmsSearch(word, page) {
        return instance.get(`/api/v2.1/films/search-by-keyword?keyword=${word}&page=${page}`).then(response => response.data);
    },
}