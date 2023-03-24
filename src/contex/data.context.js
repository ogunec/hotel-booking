import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(undefined);

const DataProvider = ({ children }) => {
    const [rooms, setRooms] = useState(undefined);
    const [users, setUsers] = useState(undefined);
    const [user, setUser] = useState(undefined);

    const [selectStartDate, setSelectStartDate] = useState(undefined);
    const [selectEndDate, setSelectEndDate] = useState(undefined);

    const data = {
        rooms, setRooms,
        users, setUsers,
        user, setUser,
        selectStartDate, setSelectStartDate,
        selectEndDate, setSelectEndDate
    }

    useEffect(() => {
        async function getRooms() {
            const res = await axios.get("/data/db.json");
            setRooms(res.data["rooms"]);
        }
        async function getUsers() {
            const res = await axios.get("/data/db.json");
            setUsers(res.data["users"]);
        }
        if (!rooms) {
            getRooms()
        }
        if (!users) {
            getUsers()
        }
    }, []);
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}
export const useData = () => useContext(DataContext);

export default DataProvider;