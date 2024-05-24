import axios from 'axios';

export async function getAnimesDataDB() {
    try {
        const response = await axios.get('http://' + process.env.REACT_APP_DB_HOST+ ':' + process.env.REACT_APP_DB_PORT + '/api/' + process.env.REACT_APP_ANIME_DIR);
        
        if (!response.status === 200) {
            throw new Error('Error en la respuesta del servidor');
        }

        return response.data;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
    }
}

export async function getMoviesDataDB() {
    try {
        const response = await axios.get('http://' + process.env.REACT_APP_DB_HOST+ ':' + process.env.REACT_APP_DB_PORT + '/api/' + process.env.REACT_APP_PELICULA_DIR);

        if (!response.status === 200) {
            throw new Error('Error en la respuesta del servidor');
        }

        return response.data;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
    }
}

export async function getSeriesDataDB() {
    try {
        const response = await axios.get('http://' + process.env.REACT_APP_DB_HOST+ ':' + process.env.REACT_APP_DB_PORT + '/api/' + process.env.REACT_APP_SERIE_DIR);

        if (!response.status === 200) {
            throw new Error('Error en la respuesta del servidor');
        }

        return response.data;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
    }
}

export async function getItemFullDataDB(type, id) {
    try {
        const url = `http://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_DB_PORT}/api/${process.env.REACT_APP_ITEM_DIR}?type=${type}&id=${id}`;
        const response = await axios.get(url);

        if (!response.status === 200) {
            throw new Error('Error en la respuesta del servidor');
        }

        return response.data;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        throw error;
    }
}
