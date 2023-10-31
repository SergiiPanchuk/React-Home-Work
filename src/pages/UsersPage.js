import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {Users} from "../components/UsersContainer/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, [])

    return (
        <div>
            <Users users={users}/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};