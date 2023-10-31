import {Outlet, useLoaderData} from "react-router-dom";

import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <UserDetails user={data}/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};