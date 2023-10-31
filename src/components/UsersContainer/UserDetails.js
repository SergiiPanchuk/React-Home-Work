import {useNavigate} from "react-router-dom";

import css from "./UserDetails.module.css"


const UserDetails = ({user}) => {

    const {name, username, phone, email, id, website} = user;

    const navigate = useNavigate();
    return (
        <div className={css.UserDetails}>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>phone : {phone}</div>
            <div>email : {email}</div>
            <div>id : {id}</div>
            <div>website : {website}</div>
            <button onClick={()=> navigate(`${id}`)}>post of current user</button>
        </div>
    );
};

export {UserDetails};