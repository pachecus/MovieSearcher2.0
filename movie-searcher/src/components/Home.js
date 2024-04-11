import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "./ErrorComponent";

export const Home = () => {
    const itemsMostrados = 9;
    const [moviesData, setMoviesData] = useState([]);
    const [tvShowsData, setTvShowsData] = useState([]);
    const [animesData, setAnimesData] = useState([]);
    const [searchedItem, setSearchedItem] = useState("");
    const [filtro, setFiltro] = useState("");
    const [itemsMostradosActualmente, setItemsMostradosActualmente] = useState(itemsMostrados);
    const [dataLoaded, setDataLoaded] = useState(false);

    let navigate = useNavigate();
    let itemsList;

    const baseURL = 'https://image.tmdb.org/t/p/';
    const posterSize = 'original';
    
    useEffect(() => {
        async function retrieveMoviesAndSeries () {
            const options = {
                method: 'GET',
                headers: {
                    accept: "application/json",
                    Authorization: process.env.REACT_APP_AUTH_TOKEN
                }
              };
            
            // Obtener Peliculas
            try {
                const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
                const moviesData = await moviesResponse.json();
                setMoviesData(moviesData.results);
        
                const genresResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
                const genresData = await genresResponse.json();
        
                const genreMap = {};
                genresData.genres.forEach(genre => {
                    genreMap[genre.id] = genre.name;
                });
        
                setMoviesData(prevData => prevData.map(movie => ({
                    ...movie,
                    genres: movie.genre_ids.map(genreId => genreMap[genreId])
                })));
            } catch (err) {
                console.error(err);
            }
            
            // Obtener Series
            try {
                const showsResponse = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options);
                const showsData = await showsResponse.json();
                setTvShowsData(showsData.results);
        
                const genresResponse = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options);
                const genresData = await genresResponse.json();
        
                const genreMap = {};
                genresData.genres.forEach(genre => {
                    genreMap[genre.id] = genre.name;
                });
        
                setTvShowsData(prevShowsData => {
                    return prevShowsData.map(show => ({
                        ...show,
                        genres: show.genre_ids.map(genreId => genreMap[genreId])
                    }));
                });
            } catch (err) {
                console.error(err);
            }
        }

        // Obtener Animes
        async function retrieveAnimes () {
            const url =  'https://api.jikan.moe/v4/top/anime';
        
            try {
                const response = await fetch(url);
                const result = await response.json();
                setAnimesData(result.data)
            } catch (error) {
                console.error(error);
            }
        }

        const fetchData = async () => {
            try {
              await retrieveAnimes();
              await retrieveMoviesAndSeries();
              setDataLoaded(true);
            } catch (error) {
              console.error('Error al recuperar datos:', error);
            }
          };
      
          fetchData(); 
    }, [])

    const searchMovie = (value) => {
        setSearchedItem(value)
    }

    const handleMovieClick = (item) => {
        let route;
        if (item.images && item.images.jpg && item.images.jpg.image_url) { 
            route = `/anime/${encodeURIComponent(item.title)}`;
        } else if (item.name) {
            route = `/serie/${encodeURIComponent(item.name)}`;
        } else if (item.title) {
            route = `/movie/${encodeURIComponent(item.title)}`;
        } else {
            return;
        }
        navigate(route, { state: { item } });
    }

    const handleTyping = (event) => {
        searchMovie(event.target.value);
        setItemsMostradosActualmente(itemsMostrados);
    }

    const getSortedData = () => {
        const combinedData = [...moviesData, ...tvShowsData, ...animesData];
        const sortedData = combinedData.sort((a, b) => {
            const titleA = a.title || a.name || a.title_english; 
            const titleB = b.title || b.name || b.title_english;
            return titleA.localeCompare(titleB);
        });
        return sortedData;
    };

    let message = "";
    if(dataLoaded){
        if (filtro === "anime"){
            itemsList = animesData;
            if(itemsList.length === 0) {
                message = "Ooops, parece que no hay Animes en este momento, intente de nuevo mas tarde";
                return(<ErrorComponent errorMessage={message} home={false}/>);
            }
        } else if (filtro === "peliculas"){
            itemsList = moviesData;
            if(itemsList.length === 0) {
                message = "Ooops, parece que no hay Peliculas en este momento, intente de nuevo mas tarde";
                return(<ErrorComponent errorMessage={message} home={false}/>);
            }
        } else if (filtro === "series"){
            itemsList = tvShowsData;
            if(itemsList.length === 0) {
                message = "Ooops, parece que no hay Series en este momento, intente de nuevo mas tarde";
                return(<ErrorComponent errorMessage={message} home={false}/>);
            }
        } else {
            itemsList = getSortedData();
            if(itemsList.length === 0) {
                message = "Ooops, parece que no hay entretenimiento en este momento, intente de nuevo mas tarde";
                return(<ErrorComponent errorMessage={message} home={true}/>);
            }
        }
    }else{
        return(<h1 style={{color: "white", fontSize: "xx-large"}}>Cargando...</h1>);
    }

    return(
        <div className="home">
            <div className="home-options">
                <input type="text" onChange={handleTyping}/>
                <div className="filter-options">
                    <button onClick={() => setFiltro("anime")}>Animes</button>
                    <button onClick={() => setFiltro("series")}>Series</button>
                    <button onClick={() => setFiltro("peliculas")}>Peliculas</button>
                </div>
            </div>
            <div className="items-container">
            {
            itemsList
                    .filter(item =>
                        (item.title && item.title.toLowerCase().includes(searchedItem.toLowerCase())) ||
                        (item.name && item.name.toLowerCase().includes(searchedItem.toLowerCase()))
                    )
                    .slice(0, itemsMostradosActualmente)
                    .map((item, index) => (
                        <div className="item-poster" onClick={() => handleMovieClick(item)} key={index}>
                            <h1>{item.title || item.name}</h1>
                            {item.poster_path && (
                                <img src={`${baseURL}${posterSize}${item.poster_path}`} alt={item.title || item.name} />
                            )}
                            {item.images && item.images.jpg && item.images.jpg.image_url && (
                                <img src={item.images.jpg.image_url} alt={item.title} />
                            )}
                        </div>
            ))}
            </div>
            <div className="more-info">
                <button onClick={() => {setItemsMostradosActualmente(itemsMostradosActualmente + itemsMostrados)}}> Ver mas </button>
            </div>
        </div>
    );
}