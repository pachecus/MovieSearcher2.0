import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';

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
        const apiKey = process.env.REACT_APP_API_KEY;
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
            <p>Year: {props.infoSerie.first_air_date}</p>
            <p>Generes: {props.infoSerie.genres.join(', ')}</p> 
            <p>Rating: {props.infoSerie.vote_average}</p>
            <p>Language: {props.infoSerie.original_language.toUpperCase()}</p>
            <p>Synopsis: {props.infoSerie.overview}</p>
          </div>
          <div className="trailer-container">
            {trailerUrl === 'no_trailer' ? <p>Trailer not available</p> :           
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