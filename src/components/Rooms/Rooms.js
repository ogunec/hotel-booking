import "./rooms.css"
import { BiBed } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { useData } from "../../contex/data.context";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Rooms() {
    const { rooms } = useData();
    const [newRooms, setNewRooms] = useState(undefined);

    let [searchParams] = useSearchParams()
    const adult = searchParams.get('adult')
    const child = searchParams.get('child');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    useEffect(() => {
    function filter() {
        if(!adult || !child || !startDate || !endDate) {
            return;
        }
        setNewRooms(rooms?.filter(x=>(x.numberOfPeople.adult == adult) && (x.numberOfPeople.child == child)));
    }
    if(newRooms == undefined) {
        setNewRooms(rooms);
    }
    if(rooms?.length > 0) {
        filter()
    }
    }, [rooms, adult, child, startDate, endDate]);
    return (
        <>
            <div className="rooms-info">
                <strong>{newRooms ? newRooms.length : 0}</strong> adet oda listelendi.
            </div>
            <div className="rooms-container">
                {
                    newRooms?.length > 0 ? newRooms.map(room => (
                        <div className="room-item" key={room.id}>
                            <div className="room-item-image">
                                <img src={"/rooms/" + room.image} alt="" />
                            </div>
                            <div className="room-item-detail">
                                <div className="room-item-name">{room.name}</div>
                                <div className="room-item-peope">
                                    <BiBed />
                                    {room.numberOfPeople.adult} yetişkin + {room.numberOfPeople.child} çocuk
                                </div>
                                <div className="properties">
                                    <span><AiOutlineCheck /> Balkon</span>
                                    <span><AiOutlineCheck /> Minibar</span>
                                    <span><AiOutlineCheck /> Duşakabin</span>
                                </div>
                            </div>
                            <div className="room-item-action">
                                <div className="room-item-price">
                                    <strong>{room.price} ₺</strong>
                                    <span>Toplam 1 gece</span>
                                </div>
                                <a href={"/reservation/" + room.id} className="room-item-btn">
                                    Rezervasyon Yap
                                </a>
                            </div>
                        </div>
                    )):("Aranan kriterde oda bulunamadı.")
                }
            </div>
        </>
    )
}