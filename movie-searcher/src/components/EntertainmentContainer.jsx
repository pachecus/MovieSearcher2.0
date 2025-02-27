import styles from './EntertainmentContainer.module.css';
import { ItemPoster } from './ItemPoster';
import { ItemDetails } from './ItemDetails';

export const EntertainmentContainer = (props) => {
    return (
        <div className={styles.item_container}>
            <div className={styles.item}>
                <ItemPoster itemTitle={props.itemTitle} itemImage={props.itemImage}/>
                <ItemDetails entertainmentType={props.entertainmentType} itemTitle={props.itemTitle} year={props.year} genres={props.genres} rating={props.rating} languaje={props.languaje} synopsis={props.synopsis} trailerUrl={props.trailerUrl}/>
            </div>
      </div>
    );
}