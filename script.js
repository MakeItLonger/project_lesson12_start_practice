const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const lastMovieWatch_1 = prompt('Один из последних просмотренных фильмов?', '');
const lastMovieWatchRating_1 = prompt('На сколько оцените его?', '');
const lastMovieWatch_2 = prompt('Один из последних просмотренных фильмов?', '');
const lastMovieWatchRating_2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovieWatch_1] = lastMovieWatchRating_1;
personalMovieDB.movies[lastMovieWatch_2] = lastMovieWatchRating_2;

console.log(personalMovieDB);



