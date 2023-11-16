import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Characters} from "../components";
import {episodeAction} from "../redux";

const CharactersPage = () => {

    const dispatch = useDispatch();
    const {idOfCharacters, isLoading, errors} = useSelector(state => state.episodes);


    useEffect(() => {
        dispatch(episodeAction.getByCharacterId(idOfCharacters))
    }, [dispatch, idOfCharacters])


    return (
        <div>
            {errors && <h2>{JSON.stringify(errors)}</h2>}
            {isLoading && <h2>IsLoading</h2>}
            {<Characters/>}
        </div>
    );
};

export {CharactersPage};