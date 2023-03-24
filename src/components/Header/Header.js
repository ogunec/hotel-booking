import React, {  useEffect, useState } from 'react'
import './header.css'
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { MdDateRange } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';

import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { TextField } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useData } from '../../contex/data.context';


export default function Header() {
    const [openDate, setOpenDate] = useState(false);
    const [openPeople, setOpenPeople] = useState(false);
    const [adult, setAdult] = useState(2);
    const [child, setChild] = useState(1);
    const navigate = useNavigate();
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [popup, setPopup] = useState(false);
    const {setSelectStartDate, setSelectEndDate} = useData();
    let [searchParams] = useSearchParams()
    const filterAdult = searchParams.get('adult')
    const filterChild = searchParams.get('child');
    const filterStartDate = searchParams.get('startDate');
    const filterEndDate = searchParams.get('endDate');
    
    useEffect(() => {
        function setFilter() {
            setAdult(filterAdult);
            setChild(filterChild);
            setDate([{
                startDate: new Date(filterStartDate),
                endDate: new Date(filterEndDate),
                key: "selection",
            }]);
            setSelectStartDate(date[0].startDate);
            setSelectEndDate(date[0].startDate);
        }
        if(filterAdult && filterChild && filterStartDate && filterEndDate){
            setFilter();
        }
    }, [filterAdult, filterChild, filterStartDate, filterEndDate]);

    const handleActivitySearch = (adult,child,date) => {
        navigate(handleSearchUrl(adult,child,date));
    }
    const handleSearchUrl = (adult, child, date) => {
        const startDate = `${format(date[0].startDate, "MM/dd/yyyy")}`;
        const endDate = `${format(date[0].endDate, "MM/dd/yyyy")}`;
        return `?adult=${adult}&child=${child}&startDate=${startDate}&endDate=${endDate}`;
    }
    return (
        <div className='headerContainer'>
            <div className='headerTitle'>
                <h2>
                    Sıradaki konaklamanızı bulun
                </h2>
            </div>
            {/* <Popup popup={popup} setPopup={setPopup}>
                <div className='headerSearch'>
                    <div className="headerSearchItem">
                        <MdDateRange className='icon' />
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className="headerSearchText"
                        >
                            {`Tarih: ${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                            )}`}
                        </span>
                        {openDate && (
                            <div className='dateContainer'>
                                <span className='close' onClick={() => setOpenDate(!openDate)}>
                                    KAPAT <AiOutlineClose className='icon' />
                                </span>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />
                            </div>
                        )}
                    </div>
                    <div className="headerSearchItem">
                        oda
                    </div>
                    <div className="headerSearchItem" id='headerBtn' onClick={() => handleActivitySearch(localtionSelect, categorySelect, date)}>
                        <button className="headerBtn">
                            Ara
                        </button>
                    </div>
                </div>
            </Popup> */}

            <div className="headerSearchContainer">
                <div className='headerSearch mobile'>
                    <div className="headerSearchItem dateRange"  style={{cursor: "pointer"}} 
                    onClick={() => setOpenDate(!openDate)}>
                        <MdDateRange className='icon' />
                        <span
                            className="headerSearchText"
                        >
                            {`Tarih: ${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                            )}`}
                        </span>
                        {openDate && (
                            <div className='dateContainer'>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />
                            </div>
                        )}
                    </div>
                    <div className="headerSearchItem" style={{cursor: "pointer"}} 
                    onClick={()=>setOpenPeople(!openPeople)}>
                        <AiOutlineUser className='icon' />
                        <span>{adult} yetişkin&nbsp;&nbsp;·</span>
                        <span>{child} çocuk</span>

                    {openPeople && (
                        <div className='peopleContainer'>
                            <TextField
                                type="number"
                                name="adult"
                                label="Yetişkin"
                                variant="filled"
                                value={adult}
                                onChange={(e)=>setAdult(e.target.value)}
                            />
                            <TextField
                                type="number"
                                name="child"
                                label="Çocuk"
                                variant="filled"
                                value={child}
                                onChange={(e)=>setChild(e.target.value)}
                            />
                        </div>
                    )}
                    </div>

                    <div className="headerSearchItem" id='headerBtn' onClick={() => handleActivitySearch(adult,child,date)}>
                        <button className="headerBtn">
                            Ara
                        </button>
                    </div>
                </div>

                <div className='headerSearchMobile' onClick={() => setPopup(!popup)}>
                    <AiOutlineSearch />
                    Ara
                </div>

            </div>
        </div>
    )
}