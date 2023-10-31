import {Outlet, useLoaderData} from "react-router-dom";

import {Posts} from "../components/PostsContainer/Posts";

const PostsPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <Posts posts={data}/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};