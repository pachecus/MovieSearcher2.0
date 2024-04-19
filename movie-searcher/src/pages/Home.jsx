import { useEffect, useState } from "react";
import { ErrorComponent } from "./ErrorPage";
import { getTvShowsData, getMoviesData, getAnimesData } from '../scripts/getEntertainment';
import { ItemHomePoster } from "../components/ItemHomePoster";
import { FilterAndSearchBar } from "../components/FilterAndSearchBar";
import styles from './Home.module.css';
import { Button } from "../components/Button";

export const Home = () => {
    const itemsMostrados = 9;
    const [moviesData, setMoviesData] = useState([]);
    const [tvShowsData, setTvShowsData] = useState([]);
    const [animesData, setAnimesData] = useState([]);
    const [searchedItem, setSearchedItem] = useState("");
    const [filtro, setFiltro] = useState("");
    const [itemsMostradosActualmente, setItemsMostradosActualmente] = useState(itemsMostrados);
    const [dataLoaded, setDataLoaded] = useState(false);
    
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
        <div className={styles.home}>
            <FilterAndSearchBar setFiltro={setFiltro} setItemsMostradosActualmente={setItemsMostradosActualmente} itemsMostrados={itemsMostrados} handleTyping={handleTyping}/>
            <div className={styles.items_container}>
            {
            itemsList
                    .filter(item =>
                        (item.title && item.title.toLowerCase().includes(searchedItem.toLowerCase())) ||
                        (item.name && item.name.toLowerCase().includes(searchedItem.toLowerCase()))
                    )
                    .slice(0, itemsMostradosActualmente)
                    .map((item, index) => (
                        <ItemHomePoster item={item}/>
            ))}
            </div>
            <Button function={() => {setItemsMostradosActualmente(itemsMostradosActualmente + itemsMostrados)}} text="Show more"/>
        </div>
    );
}