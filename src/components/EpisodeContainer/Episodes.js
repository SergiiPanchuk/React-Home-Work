import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";


import {episodeAction} from "../../redux";
import {Episode} from "./Episode";
import css from "./Episodes.module.css"

const Episodes = () => {
    const {episodes, isLoading, prev, next} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});


    let page = query.get('page');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeAction.getAll(page))
    }, [dispatch, page])

    const prevPage = () => {
        setQuery((prev) => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const nextPage = () => {
        setQuery((prev) => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }

    return (
        <div>
            {isLoading && <h2>IsLoading</h2>}
            <div className={css.episodeHeader}>Rick & Morty</div>
            <div className={css.Episodes}>
                {episodes && episodes.map(value => <Episode key={value.id} value={value}/>)}
            </div>
            <div className={css.EpisodesBtn}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};