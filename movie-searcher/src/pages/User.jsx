import { UserContext } from "../App"
import { useContext } from "react"
import { getUserData, getUserEntertainment } from "../scripts/userData"

export const User = () => {
    const {user, setSession} = useContext(UserContext)
    let dataU = getUserData(user);
    let dataUE = getUserEntertainment(user);
    console.log(dataU)
    console.log()
    console.log(dataUE)
    return(
        <div>
            <div>
                <h1>Informacion del Usuario</h1>
                <p>Usuario: {user}</p>
                <p>Contraseña:</p>
                <p>Nombre:</p>
                <p>Apellido:</p>
                <p>Correo:</p>
            </div>
            <div>
                <h1>Peliculas de Interes</h1>
            </div>
        </div>
    )
}