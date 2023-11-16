import {useEffect} from "react";
import {Characters} from "../components";
import {useDispatch} from "react-redux";
import {episodeAction} from "../redux";

const CharactersPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeAction.getAll())
    }, [dispatch,])


    useEffect(() => {

    }, [])


    return (
        <div>
            {characters && <Characters characters={characters}/>}
        </div>
    );
};

export {CharactersPage};