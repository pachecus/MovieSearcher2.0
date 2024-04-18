const options = {
    method: 'GET',
    headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_AUTH_TOKEN
    }
  };

  export async function getTvShowsData() {
    try {
        const showsResponse = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options);
        const showsData = await showsResponse.json();

        const genresResponse = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options);
        const genresData = await genresResponse.json();

        const genreMap = {};
        genresData.genres?.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });

        const processedTvShowsData = showsData.results?.map(show => ({
            ...show,
            genres: show.genre_ids.map(genreId => genreMap[genreId]).filter(genre => !!genre)
        })) ?? [];

        return processedTvShowsData;
    } catch (err) {
        console.error(err);
        return []; 
    }
}

export async function getMoviesData() {
    try {

        const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const moviesData = await moviesResponse.json();

        const genresResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
        const genresData = await genresResponse.json();

        const genreMap = {};
        genresData.genres?.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });

        const processedMoviesData = moviesData.results?.map(movie => ({
            ...movie,
            genres: movie.genre_ids.map(genreId => genreMap[genreId]).filter(genre => !!genre)
        })) ?? [];

        return processedMoviesData;
    } catch (err) {
        console.error(err);
        return []; 
    }
}
    
export async function getAnimesData() {
    const url = 'https://api.jikan.moe/v4/top/anime';
    try {
        const response = await fetch(url);
        const result = await response.json();

        const animesData = result.data ?? [];
        return animesData;
    } catch (error) {
        console.error(error);
        return []; 
    }
}