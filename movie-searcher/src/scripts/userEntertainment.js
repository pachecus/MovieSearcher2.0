import axios from 'axios'

export async function entertainmentRating(userInfo) {
    const {nickname, password, nombre, apellido, correo} = userInfo;
    try {
        const response = await axios.get('http://' + process.env.REACT_APP_DB_HOST+ ':' + process.env.REACT_APP_DB_PORT + '/api/' + process.env.REACT_APP_USER_REGISTER , {
          params: {
            nickname,
            password,
            nombre,
            apellido,
            correo
          }  
        });
        
        if (!response.status === 200) {
            throw new Error('Error en la respuesta del servidor');
        }

        return response.data;
    }catch (error){
        console.error('Error al registrar a un usuario');
        throw error;
    }
}