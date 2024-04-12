  import YouTube from 'react-youtube';

  export const Anime = (props) => {
    const options = {
        height: "500",
        width: "100%",
        playerVars: {
          autoplay: 0,
        },
      };

    return (
      <div className="item-container">
        <div className="item">
          <div className="item-image">
            <h1>{props.infoAnime.title}</h1>
            <img src={props.infoAnime.images.jpg.image_url} alt={props.infoAnime.title} />
          </div>
          <div className="item-details">
            <div className="item-info">
              <p>Year: {props.infoAnime.aired.prop.from.year}</p>
              <p>Generes: {props.infoAnime.genres.map(genre => genre.name).join(', ')}</p>
              <p>Rating: {props.infoAnime.rating}</p>
              <p>Synopsis: {props.infoAnime.synopsis}</p>
            </div>
            <div className="trailer-container">
              {!props.infoAnime.trailer.youtube_id ? <p>Trailer not available</p> : 
              <YouTube
                videoId={props.infoAnime.trailer.youtube_id}
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