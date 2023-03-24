import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { useData } from "../../contex/data.context";
import useAuth from "../../hooks/useAuth";
import SignIn from "../SignIn";
import MyReservationItem from "./MyReservationItem";
import "./myReservations.css"

export default function MyReservations() {
    const {rooms} = useData();
    const {user} = useAuth();
    const [myReservations, setMyReservations] = useState([]);

    useEffect(() => {
        function setReservations(){
            setMyReservations(user.myReserved);
        }
        if(user){
            setReservations()
        }
    }, [user]);

    return(
        <div className="content">
            {user ? (
            <>
                <h2>Reservasyonlarım</h2>
                <div className="myreservations-container">
                <span><strong>{myReservations.length}</strong> adet rezervasyon listelendi.</span>
                    {myReservations.map(reservation => (
                        <MyReservationItem 
                        myReservations={myReservations}
                        setMyReservations={setMyReservations} 
                        reservation={reservation} 
                        rooms={rooms} 
                        key={reservation.id} />
                    ))}
                </div>
            </>
            ) : <SignIn />}
        </div>
    )
}