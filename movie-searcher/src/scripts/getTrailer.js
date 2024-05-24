
export async function fetchTrailer(itemType, id) {
    let videoId = 'no_trailer';    
    const apiKey = process.env.REACT_APP_API_KEY;
    let url;
    let response;
    let data;
    let trailer;

    if(itemType === 1){ // Peliculas
        try {
            url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
            response = await fetch(url);
            data = await response.json();
            trailer = data.results.find(video => video.type === 'Trailer');
    
            if (trailer) {
                videoId = trailer.key;
                console.log(videoId)
            }
        } catch (error) {
            console.error('Error al obtener el tráiler:', error);
        }
    }else if (itemType === 2){ // Series
        try {
            url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`;
            console.log(url);
            response = await fetch(url);
            data = await response.json();
            trailer = data.results[0];
      
            if (trailer) {
              videoId = trailer.key;
            }
        } catch (error) {
            console.error('Error al obtener el tráiler:', error);
        }
    }
    return videoId.toString();
}