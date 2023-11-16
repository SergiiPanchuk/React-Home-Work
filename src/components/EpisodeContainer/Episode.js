import css from "./Episode.module.css"
import {NavLink} from "react-router-dom";

const Episode = ({value}) => {

    const {id, name, episode, characters} = value;
    return (
        <NavLink to={{pathname: 'character', search: `?id=${id}`}} className={css.Episode}>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>episode: {episode}</div>
            </div>
        </NavLink>
    );
};

export {Episode};