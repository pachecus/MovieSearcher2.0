import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { EntertainmentContainer } from "../components/EntertainmentContainer";
import { getItemFullDataDB } from "../scripts/getEntertainment";

export const Pelicula = () => {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const itemId = pathSegments[3];
    const locadData = async () => {
      setData(await getItemFullDataDB(1, itemId)); // 1 porque es Pelicula
    }
    locadData();
  },[location.pathname])

  if(!data) { return (<h1 style={{color: "white", fontSize: "xx-large"}}>Theres is no information available for this Movie</h1>);}
  else{
    return (
      <EntertainmentContainer itemTitle={data.titulo} itemImage={data.imagen} year={data.anio} genres={data.generos} rating={data.rating} languaje={data.lenguaje.toUpperCase()} synopsis={data.sinopsis} trailerUrl={data.trailer}/>
    );
  }
}