let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    } while (isNaN(numberOfFilms) || numberOfFilms == 0);
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovieWatch = prompt('Один из последних просмотренных фильмов?', '');
        const lastMovieWatchRating = prompt('На сколько оцените его?', '');
    
        if (lastMovieWatch != null && lastMovieWatch != '' && lastMovieWatchRating != null && lastMovieWatchRating != '' && lastMovieWatch.length < 50) {
            personalMovieDB.movies[lastMovieWatch] = lastMovieWatchRating;
            alert('Well done');
        } else {
            alert('Error 404');
            i--;
        }
    }
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }  
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

console.log(personalMovieDB);



