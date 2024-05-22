export async function getAnimesDataDB() {
    try {
        // const response = await fetch('https://' + process.env.REACT_APP_DB_HOST+ ':' + process.env.REACT_APP_DB_PORT + '/api/' + process.env.REACT_APP_ANIME_DIR);
        const response = await fetch(`/api/${process.env.REACT_APP_ANIME_DIR}`)/*+ process.env.REACT_APP_ANIME_DIR)*/.then(res => {
            console.log('Request URL:', res.url); // Verificar la URL de la solicitud
            //return response.json();
        });
        if(!response.ok){
            throw new Error('Error en la respuesta del servidor');
        }
        const data = response.json();
        return data;
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
      }
}

export async function getMoviesDataDB() {
    try {
        // const response = await fetch('http://' + process.env.REACT_APP_DB_HOST+ ':' + process.env.REACT_APP_DB_PORT + '/api/' + process.env.REACT_APP_PELICULA_DIR);
        const response = await fetch(`/api/${process.env.REACT_APP_PELICULA_DIR}`).then(res => {
            console.log('Request URL:', res.url)
        });
        if(!response.ok){
            throw new Error('Error en la respuesta del servidor');
        }
        const data = response.json();
        return data;
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
      }
}

export async function getSeriesDataDB() {
    try {
        // const response = await fetch('http://' + process.env.REACT_APP_DB_HOST+ ':' + process.env.REACT_APP_DB_PORT + '/api/' + process.env.REACT_APP_SERIE_DIR);
        const response = await fetch(`/api/${process.env.REACT_APP_SERIE_DIR}`).then(res => {
            console.log('Request URL:', res.url);
        });
        if(!response.ok){
            throw new Error('Error en la respuesta del servidor');
        }
        const data = response.json();
        return data;
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
      }
}

export async function getItemFullDataDB(type, id) {
    try{        
        // const url = `http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_DB_PORT}/api/${process.env.REACT_APP_ITEM_DIR}?type=${type}&id=${id}`;
        const url = `/api/${process.env.REACT_APP_ITEM_DIR}?type=${type}&id=${id}`;
        const response = await fetch(url).then(res => {
            console.log('Request URL:', res.url);
        })
        if(!response.ok){
            throw new Error('Error en la respuesta del servidor');
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.log('Error al cargar los datos', error);
        throw error;
    }
}