import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {Character} from "./Character";
import css from './Character.module.css'


const Characters = () => {
    const navigate = useNavigate();
    const {characters} = useSelector(state => state.episodes);

    const back = () => {
        navigate('/episode')
    }

    return (
        <div>
            <div className={css.characterHeader}>Rick & Morty</div>
            <button onClick={back}>Back</button>
            {characters.map((character) => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};