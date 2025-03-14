import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { getUserData, getUserEntertainment } from "../scripts/userData";
import { UserDataBox } from "../components/userDataBox";

export const User = () => {
    const {user, setSession} = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    const [userEntertainment, setUserEntertainment] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        async function getUserDataAndEntertainment() {
            try{
                let dataU = await getUserData(user);
                let dataUE = await getUserEntertainment(user);
                setUserData(dataU);
                setUserEntertainment(dataUE);
                setDataLoaded(true);
            }catch (error){
                console.error("Error al cargar datos y entretenimiento del usuario");
            }
        }
        getUserDataAndEntertainment();
    }, [])
    const userInfo = userData[0];
    const userAnimes = userEntertainment[0];
    const userSeries = userEntertainment[1];
    const userPeliculas = userEntertainment[2];

    if(dataLoaded && userEntertainment != 'no-user-entertainment-found'){
        return(
            <div>
                <div>
                    <UserDataBox nickname={userInfo.nickname} password={userInfo.password} nombre={userInfo.nombre} apellido={userInfo.nombre} correo={userInfo.correo}/>
                </div>
                <div>
                    <h1>Entretenimiento de Interes</h1>
                    {userAnimes.map((animeItem, index) => (
                        <h1>animes</h1>
                    ))
                    }
                    {userSeries.map((seriesItem, index) => (
                        <h1>series</h1>
                    ))
                    }
                    {userPeliculas.map((peliculasItem, index) => (
                        <h1>peliculas</h1>
                    ))
                    }
                </div>
            </div>
        );
    }else if(userEntertainment === 'no-user-entertainment-found'){
        console.log('AKJHSDFL;KASHKJLF;DASDF')
        return( <UserDataBox nickname={userInfo.nickname} password={userInfo.password} nombre={userInfo.nombre} apellido={userInfo.nombre} correo={userInfo.correo}/>)
                // <h1>NO ENTERTAINMENT...YET</h1> 
                
    }else{
        return(<h1 style={{color: "white", fontSize: "xx-large"}}>Loading...</h1>);
    }
}