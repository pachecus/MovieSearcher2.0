  import { useLocation } from 'react-router-dom';
  import { ItemPoster } from '../components/ItemPoster';
  import { ItemDetails } from '../components/ItemDetails';
  import styles from './Entertainment.module.css';

  export const Anime = () => {

    const location = useLocation();
    const item = location.state?.item; 

    if(!item) { return (<h1 style={{color: "white", fontSize: "xx-large"}}>Theres is no information available for this Anime</h1>);}
    return (
      <div className={styles.item_container}>
        <div className={styles.item}>
          <ItemPoster itemTitle={item.title} itemImage={item.images.jpg.image_url}/>
          <ItemDetails year={item.aired.prop.from.year} genres={item.genres.map( genere => genere.name)} rating={item.score} languaje="JA" synopsis={item.synopsis} trailerUrl={item.trailer.youtube_id}/>
        </div>
      </div>
    );
  }