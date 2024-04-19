import styles from './ItemHomePoster.module.css'
import { useNavigate } from 'react-router-dom'

export const ItemHomePoster = (props) => {
    const navigate = useNavigate();
    const baseURL = 'https://image.tmdb.org/t/p/';
    const posterSize = 'original';

    const handleMovieClick = (item) => {
        let route;
        if (item.images && item.images.jpg && item.images.jpg.image_url) { 
            route = `/anime/${encodeURIComponent(item)}`;
        } else if (item.name) {
            route = `/serie/${encodeURIComponent(item)}`;
        } else if (item.title) {
            route = `/movie/${encodeURIComponent(item)}`;
        } else {
            return;
        }
        navigate(route, { state: { item } });
    }
    return(
        <div className={styles.item_poster} onClick={() => handleMovieClick(props.item)} >
            <h1>{props.item.title || props.item.name}</h1>
            <img src={props.item.poster_path ?  `${baseURL}${posterSize}${props.item.poster_path}`: props.item.images.jpg.image_url} alt={props.item.title || props.item.name} />
        </div>
    );
};