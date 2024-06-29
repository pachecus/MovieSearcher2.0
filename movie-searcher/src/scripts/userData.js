import axios from 'axios'

export async function registerUser(userInfo) {
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

export function verifyUser(userInfo, setVerificationError) {
    const {nickname, password, nombre, apellido, correo, repeatedPassword} = userInfo; 

    const nicknameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const nameRegex = /^[a-zA-ZÀ-ÿ\s']{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nickname && !password && !nombre && !apellido && !correo){ // Verificacion de campos vacios
        setVerificationError('No pueden haber campos vacios.')
        return;
    }

    if (!nameRegex.test(nombre)) { // Verificacion del nombre
        setVerificationError('El nombre debe tener entre 2 y 50 caracteres y solo puede contener letras, espacios y apóstrofes.');
        return;
    }

    if (!nameRegex.test(apellido)) { // Verificacion del apellido
        setVerificationError('El apellido debe tener entre 2 y 50 caracteres y solo puede contener letras, espacios y apóstrofes.');
        return;
    }

    if (!emailRegex.test(correo)) { // Verificacion del correo
        setVerificationError('El correo electrónico debe tener un formato válido.');
        return;
    }

    if (!nicknameRegex.test(nickname)) { // Verificacion de Username
        setVerificationError('El nickname debe tener entre 4 y 16 caracteres y solo puede contener letras, números, guiones bajos (_) y guiones (-).');
        return;
    }

    if (!passwordRegex.test(password)) { // Verificacion de Contraseña
        setVerificationError('La contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
        return;
    }

    if (password !== repeatedPassword) { // Verificacion de Contraseñas iguales
        setVerificationError('Las contraseñas no coinciden.');
        return;
    }

    // No hay errores
    setVerificationError('no-errors');
    return 'no-errors';
}

export async function loginUser(user) {
    const {nickname, password} = user;
    try {
        const response = await axios.get('http://' + process.env.REACT_APP_DB_HOST+ ':' + process.env.REACT_APP_DB_PORT + '/api/' + process.env.REACT_APP_USER_LOGIN , {
          params: {
            nickname,
            password
          }  
        });
        
        if (!response.status === 200) {
            throw new Error('Error en la respuesta del servidor');
        }
        console.log(response.data);
        return response.data;
    }catch (error){
        console.error('Error al registrar a un usuario');
        throw error;
    }
}