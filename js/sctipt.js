const numberOfFilms = +prompt('how much films do you saw', '');
const persanalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('last film do your watch', ''),
    b = prompt('what rate it?', ''),
    c = prompt('last film do your watch', ''),
    d = prompt('what rate it?', '');

persanalMovieDb.movies[a] = b;
persanalMovieDb.movies[c] = d;

console.log(persanalMovieDb);