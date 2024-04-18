import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "./ErrorPage";
import { getTvShowsData, getMoviesData, getAnimesData } from '../scripts/getEntertainment';

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

    const baseURL = 'https://image.tmdb.org/t/p/';
    const posterSize = 'original';
    
    useEffect(() => {
        async function getData() {
            try{
            setTvShowsData(await getTvShowsData());
            setMoviesData(await getMoviesData());
            setAnimesData(await getAnimesData());
            setDataLoaded(true);
            }catch(error){
                console.error('Error al cargar el tráiler:', error);
            }
        }
        getData();
    }, [])

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
        setSearchedItem(event.target.value);
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
    let itemsList;
    if(dataLoaded){
        if (filtro === "anime"){
            itemsList = animesData;
            if(itemsList.length === 0) {
                message = "Ooops, looks like there are no Animes at the moment, try again later";
                return(<ErrorComponent errorMessage={message} home={false}/>);
            }
        } else if (filtro === "peliculas"){
            itemsList = moviesData;
            if(itemsList.length === 0) {
                message = "Ooops, looks like there are no Movies at the moment, try again later";
                return(<ErrorComponent errorMessage={message} home={false}/>);
            }
        } else if (filtro === "series"){
            itemsList = tvShowsData;
            if(itemsList.length === 0) {
                message = "Ooops, looks like there are no Series at the moment, try again later";
                return(<ErrorComponent errorMessage={message} home={false}/>);
            }
        } else {
            itemsList = getSortedData();
            if(itemsList.length === 0) {
                message = "Ooops, looks like there is no Entertainment at the moment, try again later";
                return(<ErrorComponent errorMessage={message} home={true}/>);
            }
        }
    }else{
        return(<h1 style={{color: "white", fontSize: "xx-large"}}>Loading...</h1>);
    }

    return(
        <div className="home">
            <div className="home-options">
                <input type="text" onChange={handleTyping}/>
                <div className="filter-options">
                    <button onClick={() => setFiltro("anime")}>Animes</button>
                    <button onClick={() => setFiltro("series")}>Series</button>
                    <button onClick={() => setFiltro("peliculas")}>Movies</button>
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
                <button onClick={() => {setItemsMostradosActualmente(itemsMostradosActualmente + itemsMostrados)}}> Show more </button>
            </div>
        </div>
    );
}