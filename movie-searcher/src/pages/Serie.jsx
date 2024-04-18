import React, { useState, useEffect } from "react";
import YouTube from 'react-youtube';
import { useLocation } from 'react-router-dom';
import { fetchTrailer } from '../scripts/getTrailer'

export const Serie = () => {
  const [trailerUrl, setTrailerUrl] = useState(null); 
  const baseURL = 'https://image.tmdb.org/t/p/';
  const posterSize = 'original'; 

  const location = useLocation();
  const item = location.state?.item; 

  const options = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    const loadTrailer = async () => {
      if (item) {
        try {
          const videoId = await fetchTrailer(2, item.id);
          setTrailerUrl(videoId);
        } catch (error) {
          console.error('Error al cargar el tráiler:', error);
        }
      }
    };
    loadTrailer();
  },{})

  if(!item) { return (<h1 style={{color: "white", fontSize: "xx-large"}}>Theres is no information available for this Show</h1>);}
  else{
    return (
      <div className="item-container">
        <div className="item">
          <div className="item-image">
            <h1>{item.name}</h1>
            <img src={`${baseURL}${posterSize}${item.poster_path}`} alt={item.name} />
          </div>
          <div className="item-details">
            <div className="item-info">
              <p>Year: {item.first_air_date}</p>
              <p>Generes: {item.genres.join(', ')}</p> 
              <p>Rating: {item.vote_average}</p>
              <p>Language: {item.original_language.toUpperCase()}</p>
              <p>Synopsis: {item.overview}</p>
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
}