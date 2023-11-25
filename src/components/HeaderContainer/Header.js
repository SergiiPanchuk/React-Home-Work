import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={''}>Cars</NavLink>
        </div>
    );
};

export {Header};