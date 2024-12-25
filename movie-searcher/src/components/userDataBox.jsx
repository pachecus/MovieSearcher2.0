

export const userDataBox = (props) => {
    return (
        <div>
            <h1>Informacion del Usuario</h1>
            <p>Usuario: {props.nickname}</p>
            <p>Contraseña: {props.password}</p>
            <p>Nombre: {props.nombre}</p>
            <p>Apellido: {props.apellido}</p>
            <p>Correo: {props.correo}</p>
      </div>
    );
}