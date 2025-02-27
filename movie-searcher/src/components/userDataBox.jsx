


export const UserDataBox = (props) => {
    console.log('HUH')
    return (
        <div>
            <h1 style={{color: "white", fontSize: "xx-large"}}>Informacion del Usuario</h1>
            <p>Usuario: {props.nickname}</p>
            <p>Contraseña: {props.password}</p>
            <p>Nombre: {props.nombre}</p>
            <p>Apellido: {props.apellido}</p>
            <p>Correo: {props.correo}</p>
      </div>
    );
}