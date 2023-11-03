import {useEffect, useState} from "react";

import {episodeServices} from "../services";
import {useAppContext} from "../hooks";
import {Characters} from "../components";

const CharactersPage = () => {

    const data = useAppContext();

    const [characters, setCharacters] = useState([] );

    useEffect(() => {
        episodeServices.getByCharacterId(data.data.join(',')).then(({data})=>setCharacters(data))
    }, [data.data])


    return (
        <div>
            {characters && <Characters characters={characters}/>}
        </div>
    );
};

export {CharactersPage};