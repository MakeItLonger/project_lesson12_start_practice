let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

let lastMovieWatch_1 = prompt('Один из последних просмотренных фильмов?', '');
let lastMovieWatchRating_1 = prompt('На сколько оцените его?', '');
let lastMovieWatch_2 = prompt('Один из последних просмотренных фильмов?', '');
let lastMovieWatchRating_2 = prompt('На сколько оцените его?', '');

let movies = {
    lastMovieWatch_1: lastMovieWatchRating_1,
    lastMovieWatch_2: lastMovieWatchRating_2
}



