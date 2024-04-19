import styles from './FilterAndSearchBar.module.css';

export const FilterAndSearchBar = (props) => {
    return (
        <div className={styles.home_options}>
            <input type="text" onChange={props.handleTyping}/>
            <div>
                <button onClick={() => {props.setFiltro("anime");props.setItemsMostradosActualmente(props.itemsMostrados);}}>Animes</button>
                <button onClick={() => {props.setFiltro("series");props.setItemsMostradosActualmente(props.itemsMostrados);}}>Series</button>
                <button onClick={() => {props.setFiltro("peliculas");props.setItemsMostradosActualmente(props.itemsMostrados);}}>Movies</button>
            </div>
        </div>
    );
}