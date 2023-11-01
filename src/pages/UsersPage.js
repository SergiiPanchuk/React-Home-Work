import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {Users} from "../components/UsersContainer/Users";

const UsersPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, [])

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export {UsersPage};