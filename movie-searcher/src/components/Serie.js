import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
<<<<<<< HEAD
<<<<<<< HEAD
import config from '../files/config.json'


=======
>>>>>>> 57d443f2 (Navbar css)
=======
>>>>>>> 7b8a86d808ca0b3b1a96da107469dd1e8a2c1319

export const Serie = (props) => {
  const [trailerUrl, setTrailerUrl] = useState(null); 
  const baseURL = 'https://image.tmdb.org/t/p/';
  const posterSize = 'original'; 

  const options = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    async function fetchTrailer() {
      try {
<<<<<<< HEAD
<<<<<<< HEAD
        const apiKey = config.apiKey;
=======
        const apiKey = process.env.REACT_APP_API_KEY;
>>>>>>> 57d443f2 (Navbar css)
=======
        const apiKey = process.env.REACT_APP_API_KEY;
>>>>>>> 7b8a86d808ca0b3b1a96da107469dd1e8a2c1319
        const showId = props.infoSerie.id; 
        const url = `https://api.themoviedb.org/3/tv/${showId}/videos?api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        const trailer = data.results[0];

        if (trailer) {
          setTrailerUrl(trailer.key);
        } else {
          setTrailerUrl('no_trailer');
        }
      } catch (error) {
        console.error('Error al obtener el tráiler:', error);
      }
    }
    fetchTrailer();
  }, [props.infoSerie.id]);

  return (
    <div className="item-container">
      <div className="item">
        <div className="item-image">
          <h1>{props.infoSerie.name}</h1>
          <img src={`${baseURL}${posterSize}${props.infoSerie.poster_path}`} alt={props.infoSerie.name} />
        </div>
        <div className="item-details">
          <div className="item-info">
            <p>Año: {props.infoSerie.first_air_date}</p>
            <p>Generos: {props.infoSerie.genres.join(', ')}</p> 
            <p>Rating: {props.infoSerie.vote_average}</p>
            <p>Lenguaje: {props.infoSerie.original_language.toUpperCase()}</p>
            <p>Sinopsis: {props.infoSerie.overview}</p>
          </div>
          <div className="trailer-container">
            {trailerUrl === 'no_trailer' ? <p>No hay tráiler disponible</p> :           
            <YouTube
              videoId={trailerUrl !== 'no_trailer' ? trailerUrl : null}
              opts={options}
            />}
          </div>
          {/* <div className="rating-container">
          </div> */}
        </div>
      </div>
    </div>
  );
}