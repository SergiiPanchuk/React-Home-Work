import {NavLink} from "react-router-dom";

import css from "./Episode.module.css";
import {useAppContext} from "../../hooks";
import {useEffect} from "react";

const Episode = ({episod}) => {
    const {id, name, episode, characters} = episod;
    const {setData} = useAppContext();

    useEffect(() => {
        const characterIds = characters.map((str) => {
            const parts = str.split('/');
            return parts[parts.length - 1];
        });
        setData(characterIds);
    }, [])


    return (
        <NavLink to={{pathname: 'character', search: `?id=${id}`}} className={css.Episode}>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>episode: {episode}</div>
            </div>
        </NavLink>
    );
}

export {Episode};