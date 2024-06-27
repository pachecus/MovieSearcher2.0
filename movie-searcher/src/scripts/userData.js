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
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de cada campo
    if (!nicknameRegex.test(nickname)) {
        setVerificationError('nickname-error');
        //console.error('Error: El nickname debe tener entre 4 y 16 caracteres y solo puede contener letras, números, guiones bajos (_) y guiones (-).');
        // Lógica para mostrar el error al usuario (por ejemplo, con un mensaje en pantalla)
        return;
    }

    if (!passwordRegex.test(password)) {
        setVerificationError('password-error');
        console.error('Error: La contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
        // Lógica para mostrar el error al usuario
        return;
    }

    if (!nameRegex.test(nombre)) {
        setVerificationError('name-error');
        console.error('Error: El nombre debe tener entre 2 y 50 caracteres y solo puede contener letras, espacios, apóstrofes y guiones.');
        // Lógica para mostrar el error al usuario
        return;
    }

    if (!nameRegex.test(apellido)) {
        setVerificationError('surname-error');
        console.error('Error: El apellido debe tener entre 2 y 50 caracteres y solo puede contener letras, espacios, apóstrofes y guiones.');
        // Lógica para mostrar el error al usuario
        return;
    }

    if (!emailRegex.test(correo)) {
        setVerificationError('mail-error');
        console.error('Error: El correo electrónico debe tener un formato válido.');
        // Lógica para mostrar el error al usuario
        return;
    }

    if (password !== repeatedPassword) {
        setVerificationError('repeatedPassword-error');
        console.error('Error: Las contraseñas no coinciden.');
        // Lógica para mostrar el error al usuario
        return;
    }
}