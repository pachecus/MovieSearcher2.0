import styles from './ItemPoster.module.css'

export const ItemPoster = (props) => {
    return (
        <div className={styles.div}>
          <h1>{props.itemTitle}</h1>
          <img src={props.itemImage} alt={props.itemTitle} />
        </div>
    );
}

