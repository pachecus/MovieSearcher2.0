import YouTube from 'react-youtube';
import styles from './ItemDetails.module.css'

export const ItemDetails = (props) => {
    const options = {
        height: "500",
        width: "100%",
        playerVars: {
          autoplay: 0,
        },
    };
    
    return (
        <div className={styles.item_details}>
            <div className={styles.item_info}>
                <p>Year: {props.year}</p>
                <p>Generes: {props.genres}</p> 
                <p>Rating: {props.rating}</p>
                <p>Language: {props.languaje}</p>
                <p>Synopsis: {props.synopsis}</p>
            </div>
            <div>
            {props.trailerUrl === 'no_trailer' ? <p>Trailer not available</p> :           
                <YouTube
                    videoId={props.trailerUrl !== 'no_trailer' ? props.trailerUrl : null}
                    opts={options}
                />}
            </div>
            {/* <div className="rating-container">
            </div> */}
      </div>
    );
}