import { Box, Button, TextField } from "@mui/material";
import moment from "moment/moment";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { DateRange } from "react-date-range";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useData } from "../../contex/data.context";
import SignIn from "../SignIn";
import PaymentForm from "./PaymentForm";

import "./reservation.css"

export default function Reservation() {
    const [cookies] = useCookies()
    const { rooms } = useData();
    const { id } = useParams();
    const room = rooms?.find(x => x.id == id);
    const {selectStartDate, setSelectStartDate,selectEndDate, setSelectEndDate} = useData();
    const [day, setDay] = useState(1);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const cardName = data.get('cardName');
        const cardNumber = data.get('cardNumber');
        const expDate = data.get('expDate');
        const cvv = data.get('cvv');
        
        if(!email || !cardName || !cardNumber || !expDate || !cvv ) {
            toast.error("Boş alanları doldunuz!");
            return;
        }
        toast.success("Rezervasyon yapıldı.");
        navigate("/");
    }
    function changeDate(newDate) {
        setDate(newDate);
        setSelectStartDate(newDate[0].startDate)
        setSelectEndDate(newDate[0].endDate)
        var zamanFark = Math.abs(newDate[0].endDate.getTime() - newDate[0].startDate.getTime());
        var gunFark = Math.ceil(zamanFark / (1000 * 3600 * 24)); 
        setDay((gunFark <= 0) ? 1 : gunFark);
    }
    function dateFormat(date) {
        return moment(date).format("LLLL").slice(0,moment(date).format("LLLL").length - 5);
    }
    return (
        <div className="content">
            {(cookies.user) ? room && (
                <div className="reservation-container">
                    <div className="reservation-user">
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <div className="reservation-user-field">
                            <h3>İletişim Bilgileri</h3>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Adres"
                                name="email"
                                autoComplete="email"
                                value={cookies.user.email}
                                autoFocus
                            />
                        </div>
                        <div className="reservation-user-field" style={{margin: "1rem 0rem"}}>
                            <h3 style={{marginBottom:"1rem"}}>Rezervasyon Tarihi</h3>
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => changeDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                            />
                        </div>
                        <div className="reservation-user-field">
                            <h3>Ödeme Bilgileri</h3>
                            <PaymentForm />
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="success"
                            sx={{ mt: 3, mb: 2, p: 1.4}}
                        >
                        Rezervasyon Yap
                        </Button>
                    </Box>
                    </div>
                    <div className="reservation-room">
                       <div className="reservation-room-wrapper">
                        <div className="room-image">
                                <img src={"/rooms/" + room.image} alt="" />
                            </div>
                            <div className="room-detail-info">
                                <span>Giriş Tarihi:</span>
                                <strong>{dateFormat(selectStartDate)}</strong>
                            </div>
                            <div className="room-detail-info">
                                <span>Çıkış Tarihi:</span>
                                <strong>{dateFormat(selectEndDate)}</strong>
                            </div>
                            <div className="room-detail-info">
                                <span>Oda Tipi:</span>
                                <strong>{room.name}</strong>
                            </div>
                            <div className="room-detail-info room-detail-price">
                                <span>Ödeyeceğiniz Tutar:</span>
                                <strong>{parseFloat(room.price * day).toFixed(3)} ₺</strong>
                            </div>
                       </div>
                    </div>
                </div>
            ) : <SignIn />}
        </div>
    )
}