import { Box, Button } from "@mui/material";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { BiBed } from "react-icons/bi";
import { toast } from "react-toastify";
import { useData } from "../../contex/data.context";

export default function MyReservationItem({ reservation, rooms, setMyReservations, myReservations}) {
    const [room, setRoom] = useState({});
    const [day, setDay] = useState(1);
    const {user, setUser} = useData();

    useEffect(() => {
        function getRoom() {
            setRoom(rooms?.find(x => x.id == reservation.roomId));
        }
        function dayCalcu(startDate,endDate) {
            startDate = new Date(startDate);
            endDate = new Date(endDate);
            var zamanFark = Math.abs(startDate.getTime() - endDate.getTime());
            var gunFark = Math.ceil(zamanFark / (1000 * 3600 * 24)); 
            setDay((gunFark <= 0) ? 1 : gunFark);
        }
        if (rooms) {
            getRoom()
            dayCalcu(reservation.startDate,reservation.endDate);
        }
    }, [reservation, rooms]);

    function dateFormat(date) {
        return moment(date).format("LLLL").slice(0, moment(date).format("LLLL").length - 5);
    }
    function reservationCancel(id) {
        toast.success("Rezervasyon iptal edildi.")
        setMyReservations(myReservations.filter(x=>x.id != id))
    }
    return (
        <>
            {reservation && (
                <div className="myreservation-item">
                    <div className="myreservation-item-image">
                        <img src={"/rooms/" + room.image} alt="" />
                    </div>
                    <div className="myreservation-item-info">
                        <div className="myreservation-item-name">
                            {room.name}
                        </div>
                        <div className="myreservation-item-peope">
                            <BiBed />
                            {room.numberOfPeople?.adult} yetişkin + {room.numberOfPeople?.child} çocuk
                        </div>
                        <div className="myreservation-item-date">
                            {dateFormat(reservation.startDate)} - {dateFormat(reservation.endDate)}
                        </div>
                        <Box
                            sx={{
                                marginTop: 2,
                            }}
                        >
                            <Button
                                variant='contained'
                                color='error'
                                onClick={()=> reservationCancel(reservation.id)}
                                >
                                REZERVASYON İPTAL
                            </Button>
                        </Box>
                    </div>
                    <div className="myreservation-item-price">
                        <strong>{parseFloat(room.price * day).toFixed(3)} ₺</strong>
                        <span>Toplam {day} gece</span>
                    </div>
                </div>
            )}
        </>
    )
}