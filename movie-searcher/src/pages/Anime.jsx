import { useLocation } from 'react-router-dom';
import { EntertainmentContainer } from '../components/EntertainmentContainer';
import { useEffect, useState } from 'react';
import { getItemFullDataDB } from "../scripts/getEntertainment";

export const Anime = () => {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const itemId = pathSegments[3];
    const locadData = async () => {
      setData(await getItemFullDataDB(3, itemId)); // 3 porque es Anime
    }
    locadData();
  },[location.pathname])

  if(!data) { return (<h1 style={{color: "white", fontSize: "xx-large"}}>Theres is no information available for this Anime</h1>);}
  else{
    return (
      <EntertainmentContainer entertainmentType={3} itemTitle={data.titulo} itemImage={data.imagen} year={data.anio} genres={data.generos} rating={data.rating} languaje={data.lenguaje.toUpperCase()} synopsis={data.sinopsis} trailerUrl={data.trailer}/>
    );
  }
}