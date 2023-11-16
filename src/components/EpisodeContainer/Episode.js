import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {episodeAction} from "../../redux";
import css from "./Episode.module.css"

const Episode = ({value}) => {

    const {id, name, episode, characters} = value;

    const dispatch = useDispatch();
    const characterIds = characters.map((str) => {
        const parts = str.split('/');
        return parts[parts.length - 1];
    });

    const setIds = () =>{
        dispatch(episodeAction.setCharactersId(characterIds))
    }

    return (
        <NavLink to={{pathname: 'character', search: `?id=${id}`}} className={css.Episode} onClick={setIds}>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>episode: {episode}</div>
            </div>
        </NavLink>
    );
};

export {Episode};