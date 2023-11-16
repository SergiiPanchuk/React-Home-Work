import {useNavigate} from "react-router-dom";

import {Character} from "./Character";


const Characters = ({characters}) => {

    const navigate = useNavigate();

    const back = () => {
        navigate('/episode')
    }

    return (
        <div>
            {/*<div className={css.characterHeader}>Rick & Morty</div>*/}
            <button onClick={back}>Back</button>
            {characters.map((character)=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};