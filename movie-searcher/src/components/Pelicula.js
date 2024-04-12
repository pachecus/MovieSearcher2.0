import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';

export const Pelicula = (props) => {
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
        const movieId = props.infoPelicula.id; 
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        const trailer = data.results.find(video => video.type === 'Trailer');

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
  }, [props.infoPelicula.id]);

  return (
    <div className="item-container">
      <div className="item">
        <div className="item-image">
          <h1>{props.infoPelicula.original_title}</h1>
          <img src={`${baseURL}${posterSize}${props.infoPelicula.poster_path}`} alt={props.infoPelicula.original_title} />
        </div>
        <div className="item-details">
          <div className="item-info">
            <p>Year: {props.infoPelicula.release_date}</p>
            <p>Generes: {props.infoPelicula.genres ? props.infoPelicula.genres.join(', ') : ''}</p>
            <p>Rating: {props.infoPelicula.vote_average}</p>
            <p>Language: {props.infoPelicula.original_language.toUpperCase()}</p>
            <p>Synopsis: {props.infoPelicula.overview}</p>
          </div>
          <div className="trailer-container">
            {trailerUrl === 'no_trailer' ? <p>Trailer not available</p>:  
              <YouTube
                videoId={trailerUrl}
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