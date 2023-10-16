import {useEffect, useState} from "react";
import {RenderRickandmorty} from "./RenderRickandmorty";

const FetchRick = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(value => value.json())
            .then(items => setUsers(items['results'])
            )
    }, []);

    return (
        <div>
            {users.map(value => <RenderRickandmorty key={value.id} value={value}/>)}
        </div>
    );

};

export {FetchRick};