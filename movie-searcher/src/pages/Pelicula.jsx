import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { fetchTrailer } from "../scripts/getTrailer";
import { EntertainmentContainer } from "../components/EntertainmentContainer";

export const Pelicula = () => {
  const [trailerUrl, setTrailerUrl] = useState(null); 
  const baseURL = 'https://image.tmdb.org/t/p/';
  const posterSize = 'original'; 

  const location = useLocation();
  const item = location.state?.item; 

  useEffect(() => {
    const loadTrailer = async () => {
      if (item) {
        try {
          const videoId = await fetchTrailer(1, item.id);
          setTrailerUrl(videoId);
        } catch (error) {
          console.error('Error al cargar el tráiler:', error);
        }
      };
    }
    loadTrailer();
  },[item])


  if(!item) { return (<h1 style={{color: "white", fontSize: "xx-large"}}>Theres is no information available for this Movie</h1>);}
  else{
    return (
      <EntertainmentContainer itemTitle={item.original_title} itemImage={`${baseURL}${posterSize}${item.poster_path}`} year={item.release_date} genres={item.genres} rating={item.vote_average} languaje={item.original_language.toUpperCase()} synopsis={item.overview} trailerUrl={trailerUrl}/>
    );
  }
}