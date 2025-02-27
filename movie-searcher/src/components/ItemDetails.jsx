import YouTube from 'react-youtube';
import styles from './ItemDetails.module.css'
import { UserContext } from "../App";
import { useState, useContext } from 'react';


export const ItemDetails = (props) => {
    const options = {
        height: "500",
        width: "100%",
        playerVars: {
          autoplay: 0,
        },
    };
    const [status, setStatus] = useState('');
    const {user, setSession} = useContext(UserContext);
    let userEntertainmentInfo = null;
    
    const handleRating = () => {
        const rating = document.getElementById('rating').value;
        userEntertainmentInfo = {
            nickname: user,
            type: props.entertainmentType,
            entertainmentName: props.itemTitle,
            userRating: rating,
            userEntertainmentState: status
        };

        console.log(userEntertainmentInfo);
    }

    const handleSelect = (e) => {
        setStatus(e.target.value);
        console.log('Opción seleccionada:', e.target.value);
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
            <div>
                
                <div className="rating-container">
                    <label style={{ color: "white" }}> Your Rating:
                        <input id="rating" type="number" min="1" max="10" name="rating"/>
                        
                    </label>
                </div>

                <div className="entertaiment-user-state-container">
                    <label style={{ color: "white" }}> Entertainment State:</label>
                        <select id="entertainment-state" name="state" onChange={handleSelect}>
                            <option value="Watching">Watching</option>
                            <option value="Want to Watch">Want to Watch</option>
                            <option value="Watched">Watched</option>
                            <option value="Paused">Paused</option>
                            <option value="Dropped">Dropped</option>
                            <option value="Rewatching">Rewatching</option>
                            <option value="On Hold">On Hold</option>
                        </select>

                </div>
            <button type='submit' onClick={handleRating}>Submit Rating</button>
            </div>
      </div>
    );
}