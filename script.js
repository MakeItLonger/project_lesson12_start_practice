const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start() {
        do {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        } while (isNaN(personalMovieDB.count) || personalMovieDB.count == 0);
    },
    rememberMyFilms() {
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
    },
    detectPersonalLevel () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }  
    },
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        for (i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`, '');
          
             if (genres === '' || genres === null) {
                 i--;
             } else {
                personalMovieDB.genres[i - 1] = genres;       
             }
        }

        personalMovieDB.genres.forEach( (item, index) => console.log(`Ваш любимый жанр под номером ${index + 1} - ${item}`) );
    },
    toggleVisibleMyDb() {
        !personalMovieDB.private;
    }
};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);



