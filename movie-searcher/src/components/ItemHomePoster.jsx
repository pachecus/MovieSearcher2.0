import styles from './ItemHomePoster.module.css'
import { useNavigate } from 'react-router-dom'

export const ItemHomePoster = (props) => {
    const navigate = useNavigate();

    const handleMovieClick = (item) => {
        let route;
        if (item.tipo === 3) {  // 3 son los Anime
            route = `/anime/${encodeURIComponent(item.titulo)}/${encodeURIComponent(item.id)}`;
        } else if (item.tipo === 2) { // 2 son las Series
            route = `/serie/${encodeURIComponent(item.titulo)}/${encodeURIComponent(item.id)}`;
        } else if (item.tipo === 1) { // 1 son las Peliculas
            route = `/movie/${encodeURIComponent(item.titulo)}/${encodeURIComponent(item.id)}`;
        } else {
            return;
        }
        navigate(route);
    }
    
    return(
        <div className={styles.item_poster} onClick={() => handleMovieClick(props.item)} >
            <h1>{props.item.titulo}</h1>
            <img src={props.item.imagen} alt={props.item.titulo} />
        </div>
    );
};