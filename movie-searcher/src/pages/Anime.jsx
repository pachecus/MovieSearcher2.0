  import YouTube from 'react-youtube';
  import { useLocation } from 'react-router-dom';

  export const Anime = () => {

    const location = useLocation();
    const item = location.state?.item; 

    const options = {
        height: "500",
        width: "100%",
        playerVars: {
          autoplay: 0,
        },
      };

    if(!item) { return (<h1 style={{color: "white", fontSize: "xx-large"}}>Theres is no information available for this Anime</h1>);}
    return (
      <div className="item-container">
        <div className="item">
          <div className="item-image">
            <h1>{item.title}</h1>
            <img src={item.images.jpg.image_url} alt={item.title} />
          </div>
          <div className="item-details">
            <div className="item-info">
              <p>Year: {item.aired.prop.from.year}</p>
              <p>Generes: {item.genres.map(genre => genre.name).join(', ')}</p>
              <p>Rating: {item.rating}</p>
              <p>Synopsis: {item.synopsis}</p>
            </div>
            <div className="trailer-container">
              {!item.trailer.youtube_id ? <p>Trailer not available</p> : 
              <YouTube
                videoId={item.trailer.youtube_id}
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