
export const userEntertainmentBox = (props) => {
    return (
        <div className={styles.item_container}>
            <div className={styles.item}>
                <ItemPoster itemTitle={props.itemTitle} itemImage={props.itemImage}/>
                <ItemDetails year={props.year} genres={props.genres} rating={props.rating} languaje={props.languaje} synopsis={props.synopsis} trailerUrl={props.trailerUrl}/>
            </div>
      </div>
    );
}